const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.VITE_NOTION_TOKEN,
});

const databaseId = process.env.VITE_NOTION_DATABASE_ID;

exports.handler = async function () {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [{ property: 'Date', direction: 'descending' }],
    });

    const data = response.results.map((page) => {
      const props = page.properties;
      return {
        id: page.id,
        title: props.Title?.title[0]?.plain_text || 'Untitled',
        type: props.Type?.multi_select?.[0]?.name || '',
        page: props.Page?.multi_select?.[0]?.name || '',
        category: props.Category?.multi_select?.[0]?.name || '',
        description: props.Description?.rich_text?.[0]?.plain_text || '',
        url: props.URL?.url || '',
        date: props.Date?.date?.start || '',
        tag: props.Tag?.multi_select?.[0]?.name || '',
        image:
          props.Thumbnail?.files?.[0]?.file?.url ||
          props.Thumbnail?.files?.[0]?.external?.url ||
          '',
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("❌ Notion API error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Notion fetch failed' }),
    };
  }
};
