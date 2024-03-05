import { CategoryMap } from '~/constants/category-map';

export function useStaticContent() {
  function cleanValues(type, content) {
    content.slug = content._path.replace(`/${type}/`, '');
    content.excerpt = content.description;
    content.category = CategoryMap[type][content.category];

    return content;
  }

  async function getContent(type, query = {}) {
    const content = await queryContent(type).where(query).find();

    content.forEach((value) => {
      value = cleanValues(type, value);
    });

    return content;
  }

  async function getContentBySlug(type, slug, query = {}) {
    const content = await queryContent(type, slug).where(query).findOne();
    return cleanValues(type, content);
  }

  return {
    getContent,
    getContentBySlug,
  };
}
