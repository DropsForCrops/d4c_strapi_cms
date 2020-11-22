const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  async create(ctx) {debugger
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
debugger
      entity = await strapi.services.service-providers.create(data, { files });
    } else {
      entity = await strapi.services.service-providers.create(ctx.request.body);
    }

    entry = sanitizeEntity(entity, { model: strapi.models.comment });

    // check if the comment content contains a bad word
    if (entry.content) {
      // send an email by using the email plugin
      await strapi.plugins['email'].services.email.send({
        to: 'kaltenytmonika3@gmail.com',
        from: 'debbiehemlockshan@gmail.com',
        subject: 'Comment posted that contains a bad words',
        text: `
          The comment #${entry.id} contain a bad words.

          Comment:
          ${entry.content}
        `,
      });
    }

    return entry;
  },

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.service-providers.search(ctx.query);
    } else {
      entities = await strapi.services.service-providers.find(ctx.query);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.service-providers }));
  },
};