FROM node:24-alpine

WORKDIR /app

COPY --chown=node:node server.mjs ./server.mjs

ENV NODE_ENV=production
ENV PORT=8080

USER node

EXPOSE 8080

HEALTHCHECK --interval=2s --timeout=2s --start-period=2s --retries=10 \
  CMD node -e "fetch('http://127.0.0.1:8080/health').then(r=>{if(!r.ok)process.exit(1)}).catch(()=>process.exit(1))"

CMD ["node", "server.mjs"]
