const isMathPatternPath = (pathA, pathB) => {
  const partsA = pathA.split('/');
  const partsB = pathB.split('/');

  if (partsA.length !== partsB.length) return false;

  const isMatch = partsA.every((part, i) => {
    return part === partsB[i] || part.startsWith(':');
  });

  return isMatch;
};

export function useBreadcrumbs() {
  const router = useRouter();
  const route = useRoute();
  const routes = router.getRoutes();

  const HOMEPAGE = { name: 'Home', path: '/' };
  const breadcrumbs = ref([HOMEPAGE]);

  watch(
    () => ({
      path: route.path,
      name: route.name,
      meta: route.meta,
      matched: route.matched,
    }),
    (route) => {
      breadcrumbs.value = getBreadcrumbs(route.path);
    },
    {
      immediate: true,
    }
  );

  function getBreadcrumbs(currentRoute) {
    if (currentRoute === '') return [HOMEPAGE];

    const paths = getBreadcrumbs(
      currentRoute.slice(0, currentRoute.lastIndexOf('/'))
    );

    const founds = routes.filter((r) =>
      isMathPatternPath(r.path, currentRoute)
    );

    const matchRoute =
      founds.length > 1
        ? founds.find((r) => r.path === currentRoute)
        : founds[0];

    if (matchRoute?.name.includes('slug')) {
      const routeSplit = currentRoute.split('/');
      matchRoute.name = routeSplit[routeSplit.length - 1];
    }
    return [
      ...paths,
      {
        path: currentRoute,
        name:
          matchRoute?.meta?.breadcrumb ||
          matchRoute?.name ||
          matchRoute?.path ||
          currentRoute,
      },
    ];
  }

  return {
    breadcrumbs,
  };
}
