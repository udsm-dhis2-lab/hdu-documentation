module.exports = {
  docsSidebar: [
    'intro',
    {
      type: 'doc',
      id: 'introduction/overview',
      label: 'Developers',
    },

    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'getting-started/start',
      },
      items: [
        'architecture/system-architecture-overview',
        {
      type: 'category',
      label: 'Core Data Sending APIs',
      link: {
        type: 'doc',
        id: 'architecture/hdu-components',
      },
      items: [
        'architecture/lab',
        'architecture/client',
        'architecture/shared',
        'architecture/diff',
      ],
    },
      ],
    },

    {
      type: 'category',
      label: 'Data Template Structure',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'data-templates/mandatory-vs-optional',
      },
      items: [
        {
          type: 'category',
          label: 'Core Blocks',
          items: [
            'data-templates/core-blocks/index',
            'data-templates/core-blocks/facility-details',
            'data-templates/core-blocks/demographic-details',
            'data-templates/core-blocks/visit-details',
            'data-templates/core-blocks/appointment-details',
            'data-templates/core-blocks/lifestyle-information',
            'data-templates/core-blocks/admission-details',
            'data-templates/core-blocks/outcome-details',
            'data-templates/core-blocks/visit-main-payment-details',
            'data-templates/core-blocks/billing-details',
            'data-templates/core-blocks/referral-details'
          ]
        },
        {
          type: 'category',
          label: 'Clinical & Diagnostic Blocks',
          items: [
            'data-templates/clinical-diagnostic-blocks/index',
            'data-templates/clinical-diagnostic-blocks/self-monitoring-clinical-information',
            'data-templates/clinical-diagnostic-blocks/clinical-information',
            'data-templates/clinical-diagnostic-blocks/allergies',
            'data-templates/clinical-diagnostic-blocks/chronic-conditions',
            'data-templates/clinical-diagnostic-blocks/lab-request-details',
            'data-templates/clinical-diagnostic-blocks/diagnosis-details',
            'data-templates/clinical-diagnostic-blocks/medication-details',
            'data-templates/clinical-diagnostic-blocks/treatment-details',
            'data-templates/clinical-diagnostic-blocks/radiology-details'
          ]
        },
        {
          type: 'category',
          label: 'Specialized Program Blocks',
          items: [
            'data-templates/specialized-program-blocks/index',
            'data-templates/specialized-program-blocks/eye-clinic-details',
            'data-templates/specialized-program-blocks/antenatal-care-details',
            'data-templates/specialized-program-blocks/labor-and-delivery-details',
            'data-templates/specialized-program-blocks/postnatal-details',
            'data-templates/specialized-program-blocks/vaccination-details',
            'data-templates/specialized-program-blocks/prophylaxis-details',
            'data-templates/specialized-program-blocks/family-planning-details',
            'data-templates/specialized-program-blocks/child-health-details',
            'data-templates/specialized-program-blocks/cpac-details',
            'data-templates/specialized-program-blocks/cecap',
            'data-templates/specialized-program-blocks/causes-of-death-details',
            'data-templates/specialized-program-blocks/death-registry-details',
            'data-templates/specialized-program-blocks/contraceptives',
            'data-templates/specialized-program-blocks/other-information'
          ]
        },

        'data-templates/submitting-data-templates',
      ],
    },

    {
      type: 'category',
      label: 'Create Client and Submit Shared Health Records',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'client-registry/overview',
      },
      items: [
        'client-registry/searching-clients',
        'client-registry/registering-clients',
        'client-registry/updating-clients',
        'client-registry/identifier-standards',
      ],
    },

    
    {
      type: 'category',
      label: 'Standardized Codes Reference',
      collapsed: false,
      items: [
        'codes/icd10',
        'codes/loinc',
        'codes/tanzania-specific-codes',
      ],
    },
    {
      type: 'doc',
      id: 'troubleshooting/http-status-codes',
      label: 'Troubleshooting & Errors',
    },

    {
      type: 'category',
      label: 'Appendices',
      collapsed: true,
      items: [
        'appendices/version-history',
        'appendices/sample-payloads',
        'appendices/tables-reference',
      ],
    },
  ],


};
