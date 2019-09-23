export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5d88a7cadc146f8e9074322d',
                  title: 'Sanity Studio',
                  name: 'iamcsk-github-io-studio',
                  apiId: '32530e75-5cf4-43c2-8f06-ab2ca3d08089'
                },
                {
                  buildHookId: '5d88a7ca8c97ca694e7aa2f6',
                  title: 'Landing pages Website',
                  name: 'iamcsk-github-io',
                  apiId: 'c9b6e7f4-9499-4d65-a24f-20aa6cb77e7e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamcsk/iamcsk-github-io',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://iamcsk-github-io.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
