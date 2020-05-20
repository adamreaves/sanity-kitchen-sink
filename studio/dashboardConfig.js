export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec58e2e70c564f51d22b74d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6uzur6xo',
                  apiId: '61fd419a-75e0-48cb-90ec-5eafe10092c9'
                },
                {
                  buildHookId: '5ec58e2e1f4983d63c6f99e0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-iuqrw96z',
                  apiId: '9edb83c9-3bb3-4e4b-be0b-5fe6ded3da07'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adamreaves/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-iuqrw96z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
