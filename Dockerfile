# simple Dockerfile - no optimizations..
FROM node:18.16.0
WORKDIR /usr/src/app
COPY package.json package-lock.json*  ./
RUN npm install --legacy-peer-deps
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build
# this fails the build 
RUN npm audit fix
RUN npm audit
    # semver  6.0.0 - 6.3.0 || 7.0.0 - 7.5.1                                                                                                                                                              
    # Severity: moderate
    # semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
    # semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
    # fix available via `npm audit fix`
    # node_modules/eslint-plugin-import/node_modules/semver
    # node_modules/eslint-plugin-jsx-a11y/node_modules/semver
    # node_modules/eslint-plugin-react/node_modules/semver
    # node_modules/semver

    # word-wrap  <1.2.4
    # Severity: moderate
    # word-wrap vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-j8xg-fqg3-53r7
    # fix available via `npm audit fix`
    # node_modules/word-wrap

    # 2 moderate severity vulnerabilities

    # To address all issues, run:
    #   npm audit fix


# RUN npm ci --only=production
EXPOSE 3000
ENV PORT 3000
CMD [ "npm", "start" ]
