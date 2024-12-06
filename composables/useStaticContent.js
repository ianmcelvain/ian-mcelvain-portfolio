import { CategoryMap } from '~/constants/category-map';

export function useStaticContent() {
  /**
   * Cleans up the values of a content object and adds the slug
   * and category properties.
   *
   * @param {string} type - The type of the content.
   * @param {object} content - The content object to be cleaned up.
   * @returns {object} The cleaned up content object.
   */
  function cleanValues(type, content) {
    content.slug = content._path.replace(`/${type}/`, '');
    content.excerpt = content.description;
    content.category = CategoryMap[type][content.category];

    return content;
  }

  async function getContent(type, options = {}) {
    const { query, sort } = options;
    const content = await queryContent(type).where(query).sort(sort).find();

    for (let i = 0; i < content.length; i++) {
      content[i] = cleanValues(type, content[i]);
    }

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
