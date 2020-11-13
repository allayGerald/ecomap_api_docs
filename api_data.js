define({ "api": [
  {
    "type": "delete",
    "url": "/api-clients/:id",
    "title": "Delete My API-Client",
    "group": "API-Client",
    "name": "DELETEClient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the client to change status, passed as url parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204\n{\n   \"status\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/apiClients/apiClient.routes.js",
    "groupTitle": "API-Client",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFoundError",
            "description": "<p>Can not find specified resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ResourceNotFoundError:",
          "content": " HTTP/1.1 404 NotFound\n{\n \"status\": false,\n \"message\": \"Resource not found!\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api-clients",
    "title": "Fetch all API-Clients",
    "group": "API-Client",
    "name": "GetApiClient",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"docs\": [\n      {\n          \"isActive\": true,\n          \"_id\": \"5f8e9f96e4f64c8e5af8d469\",\n          \"url\": \"https://mahiri.co.tz\",\n          \"name\": \"Mahiri App\",\n          \"description\": \"Test app\",\n          \"user\": {\n              \"_id\": \"5f60832b58668df95b61435a\",\n              \"firstName\": \"Jane\",\n              \"lastName\": \"Mdoe\",\n              \"email\": \"janemdoe@mahiri.com\"\n          },\n          \"createdAt\": \"2020-10-20T08:28:06.410Z\",\n          \"updatedAt\": \"2020-10-20T08:28:06.410Z\",\n          \"__v\": 0\n      }\n  ],\n  \"totalDocs\": 1,\n  \"limit\": 1,\n  \"totalPages\": 1,\n  \"page\": 1,\n  \"pagingCounter\": 1,\n  \"hasPrevPage\": false,\n  \"hasNextPage\": false,\n  \"prevPage\": null,\n  \"nextPage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/apiClients/apiClient.routes.js",
    "groupTitle": "API-Client",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserRoleNotAuthorized",
            "description": "<p>User not Authorized to access resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n  \"message\": \"Client Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api-clients/me",
    "title": "Fetch my own API-Clients",
    "group": "API-Client",
    "name": "GetMyApiClients",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "[\n{\n          \"isActive\": true,\n          \"_id\": \"5f8e9f96e4f64c8e5af8d469\",\n          \"url\": \"https://mahiri.co.tz\",\n          \"name\": \"Mahiri App\",\n          \"description\": \"Test app\",\n          \"user\":  \"5f60832b58668df95b61435a\",\n          \"createdAt\": \"2020-10-20T08:28:06.410Z\",\n          \"updatedAt\": \"2020-10-20T08:28:06.410Z\",\n          \"__v\": 0\n  }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/apiClients/apiClient.routes.js",
    "groupTitle": "API-Client",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api-clients/:id/refresh",
    "title": "Refresh clientId",
    "group": "API-Client",
    "name": "POSTRefreshClientID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the client to change status, passed as url parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"status\": true,\n\"clientId\": \"5faa4a36ec0ca1d83aaa509cd39cd826c93113b8e5f2162143fc003a\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/apiClients/apiClient.routes.js",
    "groupTitle": "API-Client",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFoundError",
            "description": "<p>Can not find specified resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ResourceNotFoundError:",
          "content": " HTTP/1.1 404 NotFound\n{\n \"status\": false,\n \"message\": \"Resource not found!\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api-clients/:id",
    "title": "Update my API-Client details",
    "group": "API-Client",
    "name": "PatchApiClient",
    "parameter": {
      "fields": {
        "Request message body": [
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>The name of your application</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "iconUrl",
            "description": "<p>Url to client icon</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description Additional information</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "privacyPolicyLink",
            "description": "<p>Link to the client privacy policy</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "clientId",
            "description": "<p>The clientId used to authorize client app</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"isActive\": true,\n  \"_id\": \"5f8e9f96e4f64c8e5af8d469\",\n  \"url\": \"https://mahiri.co.tz\",\n  \"name\": \"Mahiri App\",\n  \"description\": \"Test app\",\n  \"user\":  \"5f60832b58668df95b61435a\",\n  \"createdAt\": \"2020-10-20T08:28:06.410Z\",\n  \"updatedAt\": \"2020-10-20T08:28:06.410Z\",\n  \"__v\": 0\n  }\n\n HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Only owner can edit this client details\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/apiClients/apiClient.routes.js",
    "groupTitle": "API-Client",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api-clients",
    "title": "Register API-Client",
    "group": "API-Client",
    "name": "PostApiClient",
    "parameter": {
      "fields": {
        "Request message body": [
          {
            "group": "Request message body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of your application</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "iconUrl",
            "description": "<p>Url to client icon</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description Additional information</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "privacyPolicyLink",
            "description": "<p>Link to the client privacy policy</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "clientId",
            "description": "<p>The clientId used to authorize client app</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"clientId\": \"5f8e9f96e4f64c8e5af8d469\",\n \"status\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n     \"status\": false,\n \"message\": [\n      {\n          \"value\": \"\",\n          \"msg\": \"Application name is required!\",\n          \"param\": \"name\",\n          \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/modules/apiClients/apiClient.routes.js",
    "groupTitle": "API-Client"
  },
  {
    "type": "put",
    "url": "/api-clients/:id/change-status",
    "title": "Change Client Status",
    "group": "API-Client",
    "name": "PutChangeClientStatus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the client to change status, passed as url parameter</p>"
          }
        ],
        "Request message body": [
          {
            "group": "Request message body",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>New status, true for active</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "reason",
            "description": "<p>Reason for changing user account status. Required when deactivating account</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"status\": true,\n\"message\": \"Status Changed Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n   \"status\": false,\n   \"message\": [\n       {\n           \"value\": \"\",\n           \"msg\": \"Please tell us why you want to deactivate this user\",\n           \"param\": \"reason\",\n           \"location\": \"body\"\n       },\n       {\n           \"value\": \"\",\n           \"msg\": \"Status is required!\",\n           \"param\": \"isActive\",\n           \"location\": \"body\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/apiClients/apiClient.routes.js",
    "groupTitle": "API-Client"
  },
  {
    "type": "delete",
    "url": "/access/roles/:id",
    "title": "Delete Role",
    "group": "AccessControl",
    "name": "DeleteRoles",
    "permission": [
      {
        "name": "MUST VERIFY EMAIL & NOT DEFAULT PASSWORD"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Role Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204\n{\n   \"status\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 403 FORBIDDEN ENTITY\n{\n   \"status\": false,\n  \"message\":  \"message\": \"Can not delete default role\"\n  }",
          "type": "json"
        },
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "ResourceNotFoundError:",
          "content": " HTTP/1.1 404 NotFound\n{\n \"status\": false,\n \"message\": \"Resource not found!\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFoundError",
            "description": "<p>Can not find specified resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/modules/accessControl/accessControl.routes.js",
    "groupTitle": "AccessControl"
  },
  {
    "type": "get",
    "url": "/access/permissions",
    "title": "Fetch all permissions",
    "group": "AccessControl",
    "name": "GetPermissions",
    "permission": [
      {
        "name": "MUST VERIFY EMAIL & NOT DEFAULT PASSWORD"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n   \"_id\": 5f288c53f882e37de9101698,\n   \"isDefault\": true,\n   \"name\": 'Administrator',\n   \"description\": 'System Administrator, Controls the whole system',\n   \"createdAt\": 2020-08-03T22:14:43.583Z,\n   \"updatedAt\": 2020-08-03T22:14:43.583Z,\n   \"__v\": 0\n },\n{\n   \"_id\": 5f288c53f882e37de91016a1,\n   \"isDefault\": true,\n   \"name\": 'Ambassador',\n   \"description\": 'Regional Ambassador, Approves regional mapping entries',\n   \"createdAt\": 2020-08-03T22:14:43.698Z,\n   \"updatedAt\": 2020-08-03T22:14:43.698Z,\n   \"__v\": 0\n },\n{\n   \"_id\": 5f288c53f882e37de91016a2,\n   \"isDefault\": true,\n   \"name\": 'Editor',\n   \"description\": 'Editor, Can view all mapping information and approve mapping entries',\n   \"createdAt\": 2020-08-03T22:14:43.700Z,\n   \"updatedAt\": 2020-08-03T22:14:43.700Z,\n   \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/accessControl/accessControl.routes.js",
    "groupTitle": "AccessControl"
  },
  {
    "type": "get",
    "url": "/access/roles",
    "title": "Fetch all roles",
    "group": "AccessControl",
    "name": "GetRoles",
    "permission": [
      {
        "name": "MUST VERIFY EMAIL & NOT DEFAULT PASSWORD"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "isDefault",
            "description": "<p>Whether a role is default role (Default roles can never be deleted).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique id of the Role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n   \"_id\": 5f288c53f882e37de9101698,\n   \"isDefault\": true,\n   \"name\": 'Administrator',\n   \"description\": 'System Administrator, Controls the whole system',\n   \"createdAt\": 2020-08-03T22:14:43.583Z,\n   \"updatedAt\": 2020-08-03T22:14:43.583Z,\n   \"__v\": 0\n },\n{\n   \"_id\": 5f288c53f882e37de91016a1,\n   \"isDefault\": true,\n   name: 'Ambassador',\n   description: 'Regional Ambassador, Approves regional mapping entries',\n   createdAt: 2020-08-03T22:14:43.698Z,\n   updatedAt: 2020-08-03T22:14:43.698Z,\n   __v: 0\n },\n{\n   \"_id\": 5f288c53f882e37de91016a2,\n   \"isDefault\": true,\n   name: 'Editor',\n   description: 'Editor, Can view all mapping information and approve mapping entries',\n   createdAt: 2020-08-03T22:14:43.700Z,\n   updatedAt: 2020-08-03T22:14:43.700Z,\n   __v: 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/accessControl/accessControl.routes.js",
    "groupTitle": "AccessControl"
  },
  {
    "type": "get",
    "url": "/access/roles/permissions",
    "title": "Fetch all roles with their permissions",
    "group": "AccessControl",
    "name": "GetRolesPermissions",
    "permission": [
      {
        "name": "MUST VERIFY EMAIL & NOT DEFAULT PASSWORD"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n     \"_id\": \"5f288c53f882e37de9101698\",\n     \"name\": \"Administrator\",\n     \"isDefault\": true,\n     \"description\": \"System Administrator, Controls the whole system\",\n     \"createdAt\": \"2020-08-03T22:14:43.583Z\",\n     \"updatedAt\": \"2020-08-03T22:14:43.583Z\",\n     \"__v\": 0,\n     \"rolePermissions\": {\n         \"permissions\": [\n             {\n                 \"_id\": \"5f288c53f882e37de9101691\",\n                 \"moduleName\": \"users\",\n                 \"displayName\": \"Can create,update and delete staff \",\n                 \"genericName\": \"write-staff\",\n                 \"createdAt\": \"2020-08-03T22:14:43.564Z\",\n                 \"updatedAt\": \"2020-08-03T22:14:43.564Z\",\n                 \"__v\": 0\n             },\n             {\n                 \"_id\": \"5f288c53f882e37de9101692\",\n                 \"moduleName\": \"users\",\n                 \"displayName\": \"Can view staffs\",\n                 \"genericName\": \"read-staff\",\n                 \"createdAt\": \"2020-08-03T22:14:43.567Z\",\n                 \"updatedAt\": \"2020-08-03T22:14:43.567Z\",\n                 \"__v\": 0\n             }\n         ]\n     },\n {\n     \"_id\": \"5f288c53f882e37de91016a1\",\n     \"name\": \"Ambassador\",\n     \"isDefault\": true,\n     \"description\": \"Regional Ambassador, Approves regional mapping entries\",\n     \"createdAt\": \"2020-08-03T22:14:43.698Z\",\n     \"updatedAt\": \"2020-08-03T22:14:43.698Z\",\n     \"__v\": 0,\n     \"rolePermissions\": {\n         \"permissions\": []\n     }\n }\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/accessControl/accessControl.routes.js",
    "groupTitle": "AccessControl"
  },
  {
    "type": "patch",
    "url": "/access/roles/:id",
    "title": "Edit Role details",
    "group": "AccessControl",
    "name": "PatchRoles",
    "permission": [
      {
        "name": "MUST VERIFY EMAIL & NOT DEFAULT PASSWORD"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Role id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The unique role name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>Role description</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5f2a57d6d101d3248afefc19\",\n   \"name\": \"Updated Role Name\",\n   \"description\": \"Updated description\",\n   \"createdAt\": \"2020-08-05T06:55:18.554Z\",\n   \"updatedAt\": \"2020-08-05T06:55:18.554Z\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n   \"status\": false,\n  \"message\": [\n      {\n          \"value\": \"existing role\",\n          \"msg\": \"Role with the same name already exist!\",\n          \"param\": \"name\",\n          \"location\": \"body\"\n      }\n    ]\n  }",
          "type": "json"
        },
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "ResourceNotFoundError:",
          "content": " HTTP/1.1 404 NotFound\n{\n \"status\": false,\n \"message\": \"Resource not found!\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFoundError",
            "description": "<p>Can not find specified resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/modules/accessControl/accessControl.routes.js",
    "groupTitle": "AccessControl"
  },
  {
    "type": "post",
    "url": "/access/roles",
    "title": "Create New Role",
    "group": "AccessControl",
    "name": "PostRoles",
    "permission": [
      {
        "name": "MUST VERIFY EMAIL & NOT DEFAULT PASSWORD"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The unique role name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>Role description</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "permissions[permissionId]",
            "description": "<p>An optional array of permission ids</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5f2a57d6d101d3248afefc19\",\n   \"name\": \"New Role\",\n   \"description\": \"This is new role\",\n   \"createdAt\": \"2020-08-05T06:55:18.554Z\",\n   \"updatedAt\": \"2020-08-05T06:55:18.554Z\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n   \"status\": false,\n  \"message\": [\n      {\n          \"value\": \"existing role\",\n          \"msg\": \"Role with the same name already exist!\",\n          \"param\": \"name\",\n          \"location\": \"body\"\n      },\n      {\n          \"value\": \"5f2a57d6d101d3248afefc19\",\n          \"msg\": \"Permissions must be an array\",\n          \"param\": \"permissions\",\n          \"location\": \"body\"\n      }\n    ]\n  }",
          "type": "json"
        },
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/modules/accessControl/accessControl.routes.js",
    "groupTitle": "AccessControl"
  },
  {
    "type": "get",
    "url": "/audit-trail",
    "title": "Fetch all audit logs",
    "group": "AuditTrail",
    "name": "GetAuditTrail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit of returned documents per page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>Current page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search term</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "os",
            "description": "<p>Filter by os</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "actionType",
            "description": "<p>Filter by actionType</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "browser",
            "description": "<p>Filter by browser</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>Filter by userId</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"data\": [\n        {\n            \"_id\": \"5fa8de91596616a8aa20c3a0\",\n            \"action\": \"Jane Mdoe Login\",\n            \"item\": \"\",\n            \"actionType\": \"login\",\n            \"user\": {\n                \"_id\": \"5f8c5a1469a39e17bca8f552\",\n                \"firstName\": \"Jane\",\n                \"lastName\": \"Mdoe\",\n                \"email\": \"mdoejane@gmail.com\"\n            },\n            \"os\": \"unknown\",\n            \"browser\": \"PostmanRuntime\",\n            \"ipAddress\": \"::1\",\n            \"createdAt\": \"2020-11-09T06:15:45.729Z\",\n            \"updatedAt\": \"2020-11-09T06:15:45.729Z\",\n            \"__v\": 0\n        }\n   ],\n   \"total\": 200,\n   \"limit\": 1,\n   \"pageCount\": 20,\n   \"page\": 1,\n   \"pagingCounter\": 1,\n   \"hasPrevPage\": false,\n   \"hasNextPage\": true,\n   \"prev\": null,\n   \"next\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/auditTrail/auditTrail.routes.js",
    "groupTitle": "AuditTrail"
  },
  {
    "type": "patch",
    "url": "/auth/change-password",
    "title": "Change Password",
    "group": "Auth",
    "name": "PatchChange-password",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currentPassword",
            "description": "<p>user currentPassword</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user new password, At least 8 character long must contain at least one special character, a number and capital later</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordConfirmation",
            "description": "<p>Confirm new password, must match new password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": true,\n \"message\": \"Password Changed Successfully!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n   \"status\": false,\n  \"message\": [\n      {\n          \"value\": \"not_current_password\",\n          \"msg\": \"The currentPassword field is required and must match your current password\",\n          \"param\": \"currentPassword\",\n          \"location\": \"body\"\n      },\n      {\n          \"value\": \"\",\n          \"msg\": \"Your password must be at least 8 characters long, MUST contain at least one capital later, a lower case letter, a special character and a number\",\n          \"param\": \"password\",\n          \"location\": \"body\"\n      },\n      {\n          \"value\": \"does_not_match\",\n          \"msg\": \"Password confirmation field does not match password\",\n          \"param\": \"passwordConfirmation\",\n          \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/auth/auth.routes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/passwords/forgot",
    "title": "Send Forgot Password Token",
    "group": "Auth",
    "name": "PostForgot",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Response status</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Info message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": true,\n   \"message\": \"Reset password email sent\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n     \"status\": false,\n \"message\": [\n      {\n          \"value\": \"\",\n          \"msg\": \"Provide valid email\",\n          \"param\": \"email\",\n          \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "EMAIL NOT FOUND",
          "content": " HTTP/1.1 404 NOT FOUND\n{\n     \"status\": false,\n \"message\": \"Theres no record of this email\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/auth/auth.routes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login to system",
    "group": "Auth",
    "name": "PostLogin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "user.isDefaultPassword",
            "description": "<p>Whether user has default password</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user._id",
            "description": "<p>user id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>user firstName</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>user lastName</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamp",
            "optional": false,
            "field": "user.lastLogin",
            "description": "<p>user lastLogin time</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamp|null",
            "optional": false,
            "field": "user.verifiedAt",
            "description": "<p>user email verification time: NULL if user email not verified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n \"token\": \"{token}\",\n \"user\": {\n     \"isDefaultPassword\": true,\n     \"role\": {\n          \"_id\": \"5f44d0cb78c8b04e2dff6a9f\",\n          \"name\": \"Administrator\",\n          \"description\": \"System Administrator, Controls the whole system\"\n      },\n     \"_id\": \"5f27bc8a956b8d3272619110\",\n     \"firstName\": \"HDIF\",\n     \"lastName\": \"Admin\",\n     \"email\": \"hdiftanzania@gmail.com\",\n     \"verifiedAt\": \"2020-08-03T07:28:10.349Z\",\n     \"lastLogin\": null,\n     \"createdAt\": \"2020-08-03T07:28:10.656Z\",\n     \"updatedAt\": \"2020-08-03T07:28:10.656Z\",\n     \"__v\": 0\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n     \"status\": false,\n \"message\": [\n      {\n          \"value\": \"\",\n          \"msg\": \"Password is required!\",\n          \"param\": \"password\",\n          \"location\": \"body\"\n      },\n      {\n          \"value\": \"\",\n          \"msg\": \"Email is required!\",\n          \"param\": \"email\",\n          \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "WRONG EMAIL OR PASSWORD",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Invalid Email or Password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/auth/auth.routes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/resend-token",
    "title": "Resend Email Verification Token",
    "group": "Auth",
    "name": "PostResendToken",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": true,\n   \"message\": \"Email sent successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n \"status\": false,\n \"message\": [\n      {\n          \"value\": \"not-valid-email\",\n          \"msg\": \"Email field must be a valid email\",\n          \"param\": \"email\",\n          \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "USER NOT FOUND",
          "content": " HTTP/1.1 404 USER NOT FOUND\n{\n \"status\": false,\n \"message\": \"There's no record of user with email F@gmail.com\"\n}",
          "type": "json"
        },
        {
          "title": "USER ALREADY VERIFIED",
          "content": " HTTP/1.1 400 USER ALREADY VERIFIED\n{\n \"status\": false,\n \"message\": \"User already verified\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/auth/auth.routes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/passwords/reset",
    "title": "Reset Password",
    "group": "Auth",
    "name": "PostResetPassword",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>reset password token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Password confirmation field</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Response status</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Info message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": true,\n   \"message\": \"Password Changed!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n     \"status\": false,\n \"message\": [\n      {\n          \"value\": \"\",\n          \"msg\": \"Your password must be at least 8 characters long, MUST contain at least one capital later, a lower case letter, a special character and a number\",\n          \"param\": \"password\",\n          \"location\": \"body\"\n      },\n      {\n          \"value\": \"\",\n          \"msg\": \"Reset token is required\",\n          \"param\": \"token\",\n          \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "INVALID TOKEN",
          "content": " HTTP/1.1 403 TOKEN NOT VALID\n{\n     \"status\": false,\n \"message\": \"Token not valid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/auth/auth.routes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/signup",
    "title": "Signup to system",
    "group": "Auth",
    "name": "PostSignup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordConfirmation",
            "description": "<p>Password confirmation field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>user first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>user last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>user phone number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Response status</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>User details</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Info message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": true,\n   \"user\": {\n       \"updatedAt\": \"2020-08-10T06:41:14.984Z\",\n       \"createdAt\": \"2020-08-10T06:41:14.984Z\",\n       \"role\": {\n           \"_id\": \"5f30b8819a19668177913a06\"\n       },\n       \"firstName\": \"Gerald\",\n       \"lastName\": \"Allay\",\n       \"email\": \"test@gmail.com\",\n       \"_id\": \"5f30ec0ab0df7ab334230a79\"\n   },\n   \"message\": \"Before proceeding, please check your email for verification link.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n     \"status\": false,\n \"message\": [\n      {\n          \"value\": \"\",\n          \"msg\": \"Password is required!\",\n          \"param\": \"password\",\n          \"location\": \"body\"\n      },\n      {\n          \"value\": \"taken@email.com\",\n          \"msg\": \"This email is taken!\",\n          \"param\": \"email\",\n          \"location\": \"body\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/auth/auth.routes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/verify/:token",
    "title": "Verify Email",
    "group": "Auth",
    "name": "PostVerify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Email verification token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/modules/auth/auth.routes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/business-categories?search=",
    "title": "Fetch Business Categories",
    "group": "BusinessCategories",
    "name": "GetCategories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>search term</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n       \"_id\": \"5f33ae15b58dcbb4eac2d0a6\",\n       \"stakeholderType\": {\n           \"_id\": \"5f33ae15b58dcbb4eac2d097\",\n           \"name\": \"Stakeholders group two\",\n           \"description\": \"Stakeholders group two\",\n           \"createdAt\": \"2020-08-12T08:53:41.061Z\",\n           \"updatedAt\": \"2020-08-12T08:53:41.061Z\",\n           \"__v\": 0\n       },\n       \"name\": \"Business incubators and accelerators\",\n       \"definitions\": \"Focus on supporting the growth of companies with a combination of intensive coaching, support services, and sometimes funding. Typically, an accelerator is a cohort based limited time programme, and incubators have continuous intake, but in Tanzania the names are often used interchangeably.\",\n       \"createdAt\": \"2020-08-12T08:53:41.100Z\",\n       \"updatedAt\": \"2020-08-12T08:53:41.100Z\",\n       \"__v\": 0\n   },\n{\n       \"_id\": \"5f33ae15b58dcbb4eac2d0ab\",\n       \"stakeholderType\": {\n           \"_id\": \"5f33ae15b58dcbb4eac2d098\",\n           \"name\": \"Stakeholders group three\",\n           \"description\": \"Stakeholders group three\",\n           \"createdAt\": \"2020-08-12T08:53:41.064Z\",\n           \"updatedAt\": \"2020-08-12T08:53:41.064Z\",\n           \"__v\": 0\n       },\n       \"name\": \"Challenge funds\",\n       \"definitions\": \"Provide funding to innovations working to solve defined challenges or technology areas. Often facilitated through a series of time-bound funding rounds, sometimes focusing on different themes per round.\",\n       \"createdAt\": \"2020-08-12T08:53:41.116Z\",\n       \"updatedAt\": \"2020-08-12T08:53:41.116Z\",\n       \"__v\": 0\n   },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/businessCategories/businessCategory.routes.js",
    "groupTitle": "BusinessCategories",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/business-categories",
    "title": "Create Business Category",
    "group": "BusinessCategories",
    "name": "PostCategories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>search term</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"_id\": \"5f33ae15b58dcbb4eac2d0a6\",\n       \"name\": \"New Category\",\n       \"definitions\": \"\",\n       \"createdAt\": \"2020-08-12T08:53:41.100Z\",\n       \"updatedAt\": \"2020-08-12T08:53:41.100Z\",\n       \"__v\": 0\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n \"status\": false,\n \"message\": [\n     {\n         \"value\": \"Existing Category\",\n         \"msg\": \"Business category with the same name already exist!\",\n         \"param\": \"name\",\n         \"location\": \"body\"\n     }\n ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/modules/businessCategories/businessCategory.routes.js",
    "groupTitle": "BusinessCategories"
  },
  {
    "type": "put",
    "url": "/business-categories/:id",
    "title": "Update Business Category",
    "group": "BusinessCategories",
    "name": "PutCategories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of business category</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"_id\": \"5f33ae15b58dcbb4eac2d0a6\",\n       \"name\": \"Updated Category\",\n       \"definitions\": \"\",\n       \"createdAt\": \"2020-08-12T08:53:41.100Z\",\n       \"updatedAt\": \"2020-08-12T08:53:41.100Z\",\n       \"__v\": 0\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n \"status\": false,\n \"message\": [\n     {\n         \"value\": \"Existing Category\",\n         \"msg\": \"Business category with the same name already exist!\",\n         \"param\": \"name\",\n         \"location\": \"body\"\n     }\n ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/modules/businessCategories/businessCategory.routes.js",
    "groupTitle": "BusinessCategories"
  },
  {
    "type": "get",
    "url": "/implementers?limit=1&page=1&search=softwares",
    "title": "Fetch implementers",
    "group": "Implementers",
    "name": "GetImplementers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit of returned documents per page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>Current page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search term</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": [\n       {\n           \"socialMedias\": [\n               {\n                   \"twitter\": \"https://twitter.com/ipfsotwares\"\n               }\n           ],\n           \"name\": \"iPF softwares\",\n           \"email\": \"info@ipfsoftwares.com\",\n           \"createdAt\": \"2020-08-22T10:41:45.437Z\",\n           \"updatedAt\": \"2020-08-24T08:37:13.008Z\",\n           \"__v\": 0\n       }\n   ],\n   \"total\": 2,\n   \"limit\": 1,\n   \"pageCount\": 1,\n   \"page\": 1,\n   \"pagingCounter\": 1,\n   \"hasPrevPage\": false,\n   \"hasNextPage\": false,\n   \"prev\": null,\n   \"next\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/implementers/implementer.routes.js",
    "groupTitle": "Implementers"
  },
  {
    "type": "patch",
    "url": "/implementers/:id",
    "title": "Update implementer details",
    "group": "Implementers",
    "name": "PatchImplementers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of Implementer</p>"
          }
        ],
        "Request message body": [
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Implementer name</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Implementer email</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Implementer phone</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "website",
            "description": "<p>Implementer website</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Implementer type (Individual or Team)</p>"
          },
          {
            "group": "Request message body",
            "type": "Array",
            "optional": true,
            "field": "socialMedias",
            "description": "<p>Implementer social media accounts</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       {\n           \"socialMedias\": [\n               {\n                   \"twitter\": \"https://twitter.com/ipfsotwares\"\n               }\n           ],\n           \"name\": \"iPF softwares\",\n           \"email\": \"info@ipfsoftwares.com\",\n           \"createdAt\": \"2020-08-22T10:41:45.437Z\",\n           \"updatedAt\": \"2020-08-24T08:37:13.008Z\",\n           \"__v\": 0\n       }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/implementers/implementer.routes.js",
    "groupTitle": "Implementers",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/public/sectors?search=",
    "title": "Fetch Sectors",
    "group": "Public",
    "name": "GetPublicSectors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>search term</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n       \"_id\": \"5f33574fafa3ad42e1a6ff34\",\n       \"name\": \"ICT\",\n       \"description\": \"ICT\",\n       \"createdAt\": \"2020-08-12T02:43:27.180Z\",\n       \"updatedAt\": \"2020-08-12T02:43:27.180Z\",\n       \"__v\": 0\n   },\n{\n       \"_id\": \"5f33881cfbb58d7cc27118d1\",\n       \"name\": \"ICTs\",\n       \"description\": \"ADMIN\",\n       \"createdAt\": \"2020-08-12T06:11:40.182Z\",\n       \"updatedAt\": \"2020-08-12T06:11:40.182Z\",\n       \"__v\": 0\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/public/public.routes.js",
    "groupTitle": "Public",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>API-Client not authenticated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/public/stakeholders/:id",
    "title": "View stakeholder details",
    "group": "Public",
    "name": "GetPublicStakeholder",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientId",
            "description": "<p>Your app Id, You can pass it as query parameter or part of request body</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of Stakeholder</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"location\": {\n     \"type\": \"Point\",\n     \"coordinates\": [\n         -104.9903,\n         39.7392\n     ]\n },\n \"approvalDetails\": {\n     \"status\": \"Approved\",\n     \"user\": null\n },\n \"socialMedias\": [\n     {\n         \"twitter\": \"https://twitter.com/ipfsotwares\"\n     }\n ],\n \"services\": [],\n \"mapper\": \"5f50bc8c282c1300172e8fb6\",\n \"isSelfMapped\": false,\n \"associatedHubs\": [],\n \"sectors\": [],\n \"innovationStages\": [],\n \"innovationTypes\": [],\n \"_id\": \"5f50d88e84f4cb0017207339\",\n \"locationName\": \"Kimara\",\n \"name\": \"iPF softwares\",\n \"email\": \"info@ipfsoftwares.com\",\n \"contactPerson\": {\n     \"name\": \"Jane Ulomi\",\n     \"email\": \"janedoe@gmail.com\"\n },\n \"region\": \"Dar Es Salaam\",\n \"challenges\": [],\n \"implementer\": {\n     \"name\": \"John Ulomi\",\n     \"email\": \"johndoe@ipfsoftwares.com\"\n },\n \"attachments\": [],\n \"createdAt\": \"2020-09-03T11:50:38.838Z\",\n \"updatedAt\": \"2020-09-03T11:50:38.838Z\",\n \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/public/public.routes.js",
    "groupTitle": "Public",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>API-Client not authenticated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/public/stakeholders?limit=1&page=1&search=softwares&innovationType=Service",
    "title": "Fetch stakeholders",
    "group": "Public",
    "name": "GetPublicStakeholders",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientId",
            "description": "<p>Your app Id, You can pass it as query parameter or part of request body</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit of returned documents per page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>Current page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search term</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sector",
            "description": "<p>Filter by sector comma separated for multiple eg idea,growth</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Filter by Approval Status ie Pending, Approved or Rejected</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "innovationStage",
            "description": "<p>Filter by innovationStage comma separated for multiple</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "classification",
            "description": "<p>Filter by classification</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "innovationType",
            "description": "<p>Filter by innovationType comma separated for multiple</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "yearFounded",
            "description": "<p>Filter by year founded ie Stakeholders that are founded before or on that year and are still active</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": [\n       {\n           \"location\": {\n               \"coordinates\": [\n                   234,\n                   -1234\n               ]\n           },\n           \"approvalStatus\": {\n               \"status\": \"Approved\",\n                \"user\": {\n                 \"_id\": \"5f3f642804d4321a0964153e\",\n                 \"firstName\": \"HDIF\",\n                 \"lastName\": \"Admin\",\n                 \"email\": \"hdiftanzania@gmail.com\"\n             },\n               \"reason\": null\n           },\n           \"socialMedias\": [\n               {\n                   \"twitter\": \"https://twitter.com/ipfsotwares\"\n               }\n           ],\n           \"services\": [],\n          \"mapper\": {\n             \"_id\": \"5f40d184cdd00b3e7075fdd3\",\n             \"firstName\": \"Jane\",\n             \"lastName\": \"Doe\",\n             \"email\": \"jdoe@example.com\"\n         },\n           \"isSelfMapped\": false,\n           \"associatedHubs\": [],\n           \"sectors\": [],\n           \"innovationTypes\": [\"Service\"],\n           \"_id\": \"5f40f6699c684d6ee106ce2d\",\n           \"locationName\": \"Kimara\",\n           \"name\": \"iPF softwares\",\n           \"email\": \"info@ipfsoftwares.com\",\n           \"region\": \"Dar Es Salaam\",\n           \"challengesAttended\": [],\n           \"attachments\": [],\n           \"createdAt\": \"2020-08-22T10:41:45.437Z\",\n           \"updatedAt\": \"2020-08-24T08:37:13.008Z\",\n           \"__v\": 0\n       }\n   ],\n   \"total\": 2,\n   \"limit\": 1,\n   \"pageCount\": 1,\n   \"page\": 1,\n   \"pagingCounter\": 1,\n   \"hasPrevPage\": false,\n   \"hasNextPage\": false,\n   \"prev\": null,\n   \"next\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/public/public.routes.js",
    "groupTitle": "Public",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>API-Client not authenticated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Public",
    "name": "gettingStarted_Registering_Your_Application_First,_visit_the_Genius_API_Client_management_page_and_create_an_API_client_for_your_application._This_will_provide_you_with_a_client_id_and_a_client_secret_that_you'll_use_to_identify_your_application_to_Genius._The_redirect_uri_is_used_for_authenticating_Genius_users_with_your_application._You_can_change_it_later._The_API_Client_will_belong_to_the_user_account_signed_in_to_Genius_when_it's_created.",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/modules/public/public.routes.js",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "/sectors?search=",
    "title": "Fetch Sectors",
    "group": "Sectors",
    "name": "GetSectors",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>search term</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n       \"_id\": \"5f33574fafa3ad42e1a6ff34\",\n       \"name\": \"ICT\",\n       \"description\": \"ICT\",\n       \"createdAt\": \"2020-08-12T02:43:27.180Z\",\n       \"updatedAt\": \"2020-08-12T02:43:27.180Z\",\n       \"__v\": 0\n   },\n{\n       \"_id\": \"5f33881cfbb58d7cc27118d1\",\n       \"name\": \"ICTs\",\n       \"description\": \"ADMIN\",\n       \"createdAt\": \"2020-08-12T06:11:40.182Z\",\n       \"updatedAt\": \"2020-08-12T06:11:40.182Z\",\n       \"__v\": 0\n   },\n{\n       \"_id\": \"5f33574fafa3ad42e1a6ff2b\",\n       \"name\": \"agriculture / agri-business\",\n       \"description\": \"agriculture / agri-business\",\n       \"createdAt\": \"2020-08-12T02:43:27.138Z\",\n       \"updatedAt\": \"2020-08-12T02:43:27.138Z\",\n       \"__v\": 0\n   },\n{\n       \"_id\": \"5f33574fafa3ad42e1a6ff36\",\n       \"name\": \"arts/creativity\",\n       \"description\": \"arts/creativity\",\n       \"createdAt\": \"2020-08-12T02:43:27.185Z\",\n       \"updatedAt\": \"2020-08-12T02:43:27.185Z\",\n       \"__v\": 0\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/sectors/sector.routes.js",
    "groupTitle": "Sectors",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/sectors",
    "title": "Create Sector",
    "group": "Sectors",
    "name": "PostSectors",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>user description</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5f3389bbbeba7281032ccbfa\",\n  \"name\": \"New Sector\",\n  \"description\": \"New Sector\",\n  \"createdAt\": \"2020-08-12T06:18:35.573Z\",\n  \"updatedAt\": \"2020-08-12T06:18:35.573Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n \"status\": false,\n \"message\": [\n     {\n         \"value\": \"Existing Sector\",\n         \"msg\": \"Sector with the same name already exist!\",\n         \"param\": \"name\",\n         \"location\": \"body\"\n     }\n ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/modules/sectors/sector.routes.js",
    "groupTitle": "Sectors"
  },
  {
    "type": "put",
    "url": "/sectors/:id",
    "title": "Update Sector",
    "group": "Sectors",
    "name": "PutSectors",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Sector ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>user description</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5f3389bbbeba7281032ccbfa\",\n  \"name\": \"Edited Sector\",\n  \"description\": \"New Sector\",\n  \"createdAt\": \"2020-08-12T06:18:35.573Z\",\n  \"updatedAt\": \"2020-08-12T06:18:35.573Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n \"status\": false,\n \"message\": [\n     {\n         \"value\": \"Existing Sector\",\n         \"msg\": \"Sector with the same name already exist!\",\n         \"param\": \"name\",\n         \"location\": \"body\"\n     }\n ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/modules/sectors/sector.routes.js",
    "groupTitle": "Sectors"
  },
  {
    "type": "patch",
    "url": "/stakeholders:id/suggestions",
    "title": "Suggest Edit",
    "group": "Stakeholders",
    "name": "EditSuggestion",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of Stakeholder</p>"
          }
        ],
        "Request message body": [
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "summary",
            "description": "<p>Summary of your suggestions</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "suggestionType",
            "description": "<p>suggestion type</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>The name of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "region",
            "description": "<p>The region of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "locationName",
            "description": "<p>Location Name or street eg Kimara</p>"
          },
          {
            "group": "Request message body",
            "type": "Array",
            "optional": true,
            "field": "coordinates",
            "description": "<p>Location coordinates in the form of [longitude, latitude]</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "district",
            "description": "<p>The district of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "ward",
            "description": "<p>Ward</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "street",
            "description": "<p>Street</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "subWard",
            "description": "<p>sub ward</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "abbreviation",
            "description": "<p>Abbreviation</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>The email of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>The phone of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "sdg",
            "description": "<p>Stakeholder SDG</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "website",
            "description": "<p>The website of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "postalAddress",
            "description": "<p>The postal address of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "tagline",
            "description": "<p>The tagline of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "logo",
            "description": "<p>The stakeholder logo url</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "certificate",
            "description": "<p>The stakeholder certificate url</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "socialMedias",
            "description": "<p>The stakeholder social media accounts</p>"
          },
          {
            "group": "Request message body",
            "type": "Object",
            "optional": true,
            "field": "contactPerson",
            "description": "<p>The stakeholder contact person details ie name, email, phone</p>"
          },
          {
            "group": "Request message body",
            "type": "Boolean",
            "optional": true,
            "field": "isSelfMapped",
            "description": "<p>Whether or not a mapper is mapping his/her self</p>"
          },
          {
            "group": "Request message body",
            "type": "Array",
            "optional": true,
            "field": "challenges",
            "description": "<p>Challenges attended; Array of objects</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "challenges[name]",
            "description": "<p>Challenge name</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "challenges[frequency]",
            "description": "<p>Challenge frequency</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "challenges[host]",
            "description": "<p>Challenge host</p>"
          },
          {
            "group": "Request message body",
            "type": "Object",
            "optional": true,
            "field": "challenges[fund]",
            "description": "<p>Challenge Fund Details</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "challenges[description]",
            "description": "<p>Challenge description</p>"
          },
          {
            "group": "Request message body",
            "type": "Date",
            "optional": true,
            "field": "challenges[start]",
            "description": "<p>Challenge start date</p>"
          },
          {
            "group": "Request message body",
            "type": "Date",
            "optional": true,
            "field": "challenges[end]",
            "description": "<p>Challenge end date</p>"
          },
          {
            "group": "Request message body",
            "type": "Array",
            "optional": true,
            "field": "innovationTypes",
            "description": "<p>Innovation types</p>"
          },
          {
            "group": "Request message body",
            "type": "Array",
            "optional": true,
            "field": "sectors",
            "description": "<p>Financial sectors</p>"
          },
          {
            "group": "Request message body",
            "type": "Boolean",
            "optional": true,
            "field": "isRegistered",
            "description": "<p>Stakeholder registration status</p>"
          },
          {
            "group": "Request message body",
            "type": "Boolean",
            "optional": true,
            "field": "isForProfit",
            "description": "<p>Whether or not the Hub/Innovation is profit/non-profit</p>"
          },
          {
            "group": "Request message body",
            "type": "Integer",
            "optional": true,
            "field": "yearFounded",
            "description": "<p>Year founded</p>"
          },
          {
            "group": "Request message body",
            "type": "Integer",
            "optional": true,
            "field": "yearEnded",
            "description": "<p>Year ended</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "implementer",
            "description": "<p>The ID of Implementer</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"status\": true,\n \"message\": \"Your suggestions have been successfully submitted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/stakeholders/stakeholder.routes.js",
    "groupTitle": "Stakeholders",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/stakeholders?limit=1&page=1&search=softwares&innovationType=Service",
    "title": "Fetch stakeholders",
    "group": "Stakeholders",
    "name": "GetStakeholders",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit of returned documents per page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>Current page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search term</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sector",
            "description": "<p>Filter by sector comma separated for multiple eg idea,growth</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Filter by Approval Status ie Pending, Approved or Rejected</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "innovationStage",
            "description": "<p>Filter by innovationStage comma separated for multiple</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "classification",
            "description": "<p>Filter by classification</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "innovationType",
            "description": "<p>Filter by innovationType comma separated for multiple</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "yearFounded",
            "description": "<p>Filter by year founded ie Stakeholders that are founded before or on that year and are still active</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": [\n       {\n           \"location\": {\n               \"coordinates\": [\n                   234,\n                   -1234\n               ]\n           },\n           \"approvalStatus\": {\n               \"status\": \"Approved\",\n                \"user\": {\n                 \"_id\": \"5f3f642804d4321a0964153e\",\n                 \"firstName\": \"HDIF\",\n                 \"lastName\": \"Admin\",\n                 \"email\": \"hdiftanzania@gmail.com\"\n             },\n               \"reason\": null\n           },\n           \"socialMedias\": [\n               {\n                   \"twitter\": \"https://twitter.com/ipfsotwares\"\n               }\n           ],\n           \"services\": [],\n          \"mapper\": {\n             \"_id\": \"5f40d184cdd00b3e7075fdd3\",\n             \"firstName\": \"Jane\",\n             \"lastName\": \"Doe\",\n             \"email\": \"jdoe@example.com\"\n         },\n           \"isSelfMapped\": false,\n           \"associatedHubs\": [],\n           \"sectors\": [],\n           \"innovationTypes\": [\"Service\"],\n           \"_id\": \"5f40f6699c684d6ee106ce2d\",\n           \"locationName\": \"Kimara\",\n           \"name\": \"iPF softwares\",\n           \"email\": \"info@ipfsoftwares.com\",\n           \"region\": \"Dar Es Salaam\",\n           \"challengesAttended\": [],\n           \"attachments\": [],\n           \"createdAt\": \"2020-08-22T10:41:45.437Z\",\n           \"updatedAt\": \"2020-08-24T08:37:13.008Z\",\n           \"__v\": 0\n       }\n   ],\n   \"total\": 2,\n   \"limit\": 1,\n   \"pageCount\": 1,\n   \"page\": 1,\n   \"pagingCounter\": 1,\n   \"hasPrevPage\": false,\n   \"hasNextPage\": false,\n   \"prev\": null,\n   \"next\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/stakeholders/stakeholder.routes.js",
    "groupTitle": "Stakeholders"
  },
  {
    "type": "get",
    "url": "/stakeholders:id/suggestions",
    "title": "Get Stakeholders suggested edits",
    "group": "Stakeholders",
    "name": "GetSuggestionEdits",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of Stakeholder</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"approvalDetails\": {\n     \"status\": \"Pending\",\n     \"user\": null\n },\n \"summary\": \"Typo in the name field\",\n   \"_id\": \"5fa1337199be7d0f3532dbee\",\n           \"stakeholder\": \"5f97d4386b31cd0d117e046f\",\n           \"editor\": {\n               \"_id\": \"5f60832b58668df95b61435a\",\n               \"firstName\": \"HDIF\",\n               \"lastName\": \"Admin\",\n               \"email\": \"hdiftanzania@gmail.com\"\n           },\n            \"changes\": {\n               \"name\": \"Ubongo Kids\",\n               \"socialMedias\": {\n                   \"twitter\": \"https://twitter.com/ipfsotwares\"\n               }\n           },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/stakeholders/stakeholder.routes.js",
    "groupTitle": "Stakeholders",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/stakeholders",
    "title": "Add stakeholder",
    "group": "Stakeholders",
    "name": "PostStakeholders",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of stakeholder</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>The region of stakeholder</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locationName",
            "description": "<p>Location Name or street eg Kimara</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Location coordinates in the form of [longitude, latitude]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>The district of stakeholder</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ward",
            "description": "<p>Ward</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "street",
            "description": "<p>Street</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subWard",
            "description": "<p>sub ward</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "abbreviation",
            "description": "<p>Abbreviation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>The email of stakeholder</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>The phone of stakeholder</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sdg",
            "description": "<p>Stakeholder SDG</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "website",
            "description": "<p>The website of stakeholder</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "postalAddress",
            "description": "<p>The postal address of stakeholder</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tagline",
            "description": "<p>The tagline of stakeholder</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "logo",
            "description": "<p>The stakeholder logo url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "certificate",
            "description": "<p>The stakeholder certificate url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "socialMedias",
            "description": "<p>The stakeholder social media accounts</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "contactPerson",
            "description": "<p>The stakeholder contact person details ie name, email, phone</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isSelfMapped",
            "description": "<p>Whether or not a mapper is mapping his/her self</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "challenges",
            "description": "<p>Challenges attended; Array of objects</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "challenges[name]",
            "description": "<p>Challenge name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "challenges[frequency]",
            "description": "<p>Challenge frequency</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "challenges[host]",
            "description": "<p>Challenge host</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "challenges[fund]",
            "description": "<p>Challenge Fund Details</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "challenges[description]",
            "description": "<p>Challenge description</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "challenges[start]",
            "description": "<p>Challenge start date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "challenges[end]",
            "description": "<p>Challenge end date</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "innovationTypes",
            "description": "<p>Innovation types supported</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Stakeholder Type</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "sectors",
            "description": "<p>Financial sectors</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isRegistered",
            "description": "<p>Stakeholder registration status</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isForProfit",
            "description": "<p>Whether or not the Hub/Innovation is profit/non-profit</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "yearFounded",
            "description": "<p>Year founded</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "yearEnded",
            "description": "<p>Year ended</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "implementerId",
            "description": "<p>The ID of Implementer</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "implementer",
            "description": "<p>Implementer details (name, email, phone, website, description, logo, type ie Individual or Team)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "implementer[name]",
            "description": "<p>Implementer Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "implementer[email]",
            "description": "<p>Implementer email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "implementer[phone]",
            "description": "<p>Implementer phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "implementer[website]",
            "description": "<p>Implementer website</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "implementer[logo]",
            "description": "<p>Implementer logo url</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"location\": {\n     \"type\": \"Point\",\n     \"coordinates\": [\n         -104.9903,\n         39.7392\n     ]\n },\n \"approvalDetails\": {\n     \"status\": \"Pending\",\n     \"user\": null\n },\n \"socialMedias\": [\n     {\n         \"twitter\": \"https://twitter.com/ipfsotwares\"\n     }\n ],\n \"services\": [],\n \"mapper\": \"5f50bc8c282c1300172e8fb6\",\n \"isSelfMapped\": false,\n \"associatedHubs\": [],\n \"sectors\": [],\n \"innovationStages\": [],\n \"innovationTypes\": [],\n \"_id\": \"5f50d88e84f4cb0017207339\",\n \"locationName\": \"Kimara\",\n \"name\": \"iPF softwares\",\n \"email\": \"info@ipfsoftwares.com\",\n \"contactPerson\": {\n     \"name\": \"Jane Ulomi\",\n     \"email\": \"janedoe@gmail.com\"\n },\n \"region\": \"Dar Es Salaam\",\n \"challenges\": [],\n \"implementer\": {\n     \"name\": \"John Ulomi\",\n     \"email\": \"johndoe@ipfsoftwares.com\"\n },\n \"attachments\": [],\n \"createdAt\": \"2020-09-03T11:50:38.838Z\",\n \"updatedAt\": \"2020-09-03T11:50:38.838Z\",\n \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n \"status\": false,\n \"message\": [\n     {\n         \"value\": \"\",\n         \"msg\": \"Name is required\",\n         \"param\": \"name\",\n         \"location\": \"body\"\n     }\n ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/modules/stakeholders/stakeholder.routes.js",
    "groupTitle": "Stakeholders"
  },
  {
    "type": "post",
    "url": "/stakeholders/:id/verify",
    "title": "Approve/Reject Stakeholder Entry",
    "group": "Stakeholders",
    "name": "PostVerifyStakeholder",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of stakeholder</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Approval Status either Rejected or Approved</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "reason",
            "description": "<p>Reason. Required if status = Rejected</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": true,\n  \"message\": \"Status Changed Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n \"status\": false,\n \"message\": [\n     {\n         \"value\": \"\",\n         \"msg\": \"Please tell us why are you rejecting this entry\",\n         \"param\": \"reason\",\n         \"location\": \"body\"\n     }\n ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/modules/stakeholders/stakeholder.routes.js",
    "groupTitle": "Stakeholders"
  },
  {
    "type": "patch",
    "url": "/stakeholders:id",
    "title": "Update stakeholder details",
    "group": "Stakeholders",
    "name": "UpdateStakeholders",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of Stakeholder</p>"
          }
        ],
        "Request message body": [
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>The name of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "region",
            "description": "<p>The region of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "locationName",
            "description": "<p>Location Name or street eg Kimara</p>"
          },
          {
            "group": "Request message body",
            "type": "Array",
            "optional": true,
            "field": "coordinates",
            "description": "<p>Location coordinates in the form of [longitude, latitude]</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "district",
            "description": "<p>The district of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "ward",
            "description": "<p>Ward</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "street",
            "description": "<p>Street</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "subWard",
            "description": "<p>sub ward</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "abbreviation",
            "description": "<p>Abbreviation</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>The email of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>The phone of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "sdg",
            "description": "<p>Stakeholder SDG</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "website",
            "description": "<p>The website of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "postalAddress",
            "description": "<p>The postal address of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "tagline",
            "description": "<p>The tagline of stakeholder</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "logo",
            "description": "<p>The stakeholder logo url</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "certificate",
            "description": "<p>The stakeholder certificate url</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "socialMedias",
            "description": "<p>The stakeholder social media accounts</p>"
          },
          {
            "group": "Request message body",
            "type": "Object",
            "optional": true,
            "field": "contactPerson",
            "description": "<p>The stakeholder contact person details ie name, email, phone</p>"
          },
          {
            "group": "Request message body",
            "type": "Boolean",
            "optional": true,
            "field": "isSelfMapped",
            "description": "<p>Whether or not a mapper is mapping his/her self</p>"
          },
          {
            "group": "Request message body",
            "type": "Array",
            "optional": true,
            "field": "challenges",
            "description": "<p>Challenges attended; Array of objects</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "challenges[name]",
            "description": "<p>Challenge name</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "challenges[frequency]",
            "description": "<p>Challenge frequency</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "challenges[host]",
            "description": "<p>Challenge host</p>"
          },
          {
            "group": "Request message body",
            "type": "Object",
            "optional": true,
            "field": "challenges[fund]",
            "description": "<p>Challenge Fund Details</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "challenges[description]",
            "description": "<p>Challenge description</p>"
          },
          {
            "group": "Request message body",
            "type": "Date",
            "optional": true,
            "field": "challenges[start]",
            "description": "<p>Challenge start date</p>"
          },
          {
            "group": "Request message body",
            "type": "Date",
            "optional": true,
            "field": "challenges[end]",
            "description": "<p>Challenge end date</p>"
          },
          {
            "group": "Request message body",
            "type": "Array",
            "optional": true,
            "field": "innovationTypes",
            "description": "<p>Innovation types</p>"
          },
          {
            "group": "Request message body",
            "type": "Array",
            "optional": true,
            "field": "sectors",
            "description": "<p>Financial sectors</p>"
          },
          {
            "group": "Request message body",
            "type": "Boolean",
            "optional": true,
            "field": "isRegistered",
            "description": "<p>Stakeholder registration status</p>"
          },
          {
            "group": "Request message body",
            "type": "Boolean",
            "optional": true,
            "field": "isForProfit",
            "description": "<p>Whether or not the Hub/Innovation is profit/non-profit</p>"
          },
          {
            "group": "Request message body",
            "type": "Integer",
            "optional": true,
            "field": "yearFounded",
            "description": "<p>Year founded</p>"
          },
          {
            "group": "Request message body",
            "type": "Integer",
            "optional": true,
            "field": "yearEnded",
            "description": "<p>Year ended</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "implementer",
            "description": "<p>The ID of Implementer</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"location\": {\n     \"type\": \"Point\",\n     \"coordinates\": [\n         -104.9903,\n         39.7392\n     ]\n },\n \"approvalDetails\": {\n     \"status\": \"Pending\",\n     \"user\": null\n },\n \"socialMedias\": [\n     {\n         \"twitter\": \"https://twitter.com/ipfsotwares\"\n     }\n ],\n \"services\": [],\n \"mapper\": \"5f50bc8c282c1300172e8fb6\",\n \"isSelfMapped\": false,\n \"associatedHubs\": [],\n \"sectors\": [],\n \"innovationStages\": [],\n \"innovationTypes\": [],\n \"_id\": \"5f50d88e84f4cb0017207339\",\n \"locationName\": \"Kimara\",\n \"name\": \"iPF softwares\",\n \"email\": \"info@ipfsoftwares.com\",\n \"contactPerson\": {\n     \"name\": \"Jane Ulomi\",\n     \"email\": \"janedoe@gmail.com\"\n },\n \"region\": \"Dar Es Salaam\",\n \"challenges\": [],\n \"implementer\": {\n     \"name\": \"John Ulomi\",\n     \"email\": \"johndoe@ipfsoftwares.com\"\n },\n \"attachments\": [],\n \"createdAt\": \"2020-09-03T11:50:38.838Z\",\n \"updatedAt\": \"2020-09-03T11:50:38.838Z\",\n \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/stakeholders/stakeholder.routes.js",
    "groupTitle": "Stakeholders",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/suggestions/me",
    "title": "Fetch my suggestions",
    "group": "SuggestedEdits",
    "name": "GetMySuggestions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"docs\": [\n       {\n           \"approvalDetails\": {\n               \"status\": \"Approved\",\n               \"user\": {\n                   \"_id\": \"5f60832b58668df95b61435a\",\n                   \"firstName\": \"HDIF\",\n                   \"lastName\": \"Admin\",\n                   \"email\": \"hdiftanzania@gmail.com\"\n               },\n               \"reason\": \"Heko\"\n           },\n           \"_id\": \"5fa128df464c4f02481d247d\",\n           \"stakeholder\": {\n               \"contactPerson\": {\n                   \"name\": \"Wacky J\",\n                   \"email\": \"wacky@ipfsoftwares.com\"\n               },\n               \"location\": {\n                   \"type\": \"Point\",\n                   \"coordinates\": [\n                       -104.9903,\n                       39.7392\n                   ]\n               },\n               \"approvalDetails\": {\n                   \"status\": \"Approved\",\n                   \"user\": \"5f60832b58668df95b61435a\"\n               },\n               \"socialMedias\": [\n                   {\n                       \"twitter\": \"https://twitter.com/ipfsotwares\"\n                   }\n               ],\n               \"services\": [],\n               \"mapper\": \"5f60832b58668df95b61435a\",\n               \"isSelfMapped\": false,\n               \"country\": \"Tanzania\",\n               \"associatedHubs\": [],\n               \"sectors\": [],\n               \"innovationStages\": [],\n               \"innovationTypes\": [],\n               \"yearEnded\": 2018,\n               \"sdg\": [],\n               \"_id\": \"5f97d4386b31cd0d117e046f\",\n               \"implementer\": null,\n               \"locationName\": \"Kimara\",\n               \"name\": \"Ubongo\",\n               \"email\": \"info@ipfsoftwares.com\",\n               \"region\": \"Dar Es Salaam\",\n               \"challenges\": [\n                   {\n                       \"fund\": {\n                           \"range\": [\n                               20000,\n                               56000\n                           ],\n                           \"currency\": \"TZS\"\n                       },\n                       \"_id\": \"5f97d4386b31cd0d117e0470\"\n                   }\n               ],\n               \"yearFounded\": 2016,\n               \"street\": \"Kimara\",\n               \"attachments\": [],\n               \"createdAt\": \"2020-10-27T08:03:04.993Z\",\n               \"updatedAt\": \"2020-11-03T10:32:25.580Z\",\n               \"__v\": 0,\n               \"user\": \"5f60832b58668df95b61435a\"\n           },\n           \"editor\": \"5f60832b58668df95b61435a\",\n           \"changes\": {\n               \"name\": \"Ubongo\",\n               \"socialMedias\": {\n                   \"twitter\": \"https://twitter.com/ipfsotwares\"\n               }\n           },\n           \"createdAt\": \"2020-11-03T09:54:39.093Z\",\n           \"updatedAt\": \"2020-11-03T10:32:25.562Z\",\n           \"__v\": 0\n       }\n   ],\n   \"totalDocs\": 1,\n   \"limit\": 15,\n   \"totalPages\": 1,\n   \"page\": 1,\n   \"pagingCounter\": 1,\n   \"hasPrevPage\": false,\n   \"hasNextPage\": false,\n   \"prevPage\": null,\n   \"nextPage\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/suggestions/suggestion.routes.js",
    "groupTitle": "SuggestedEdits",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/suggestions/:id/verify",
    "title": "Approve/Reject Suggestion Entry",
    "group": "SuggestedEdits",
    "name": "PostVerifySuggestion",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of suggestion</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Approval Status either Rejected or Approved</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "reason",
            "description": "<p>Reason. Required if status = Rejected</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": true,\n  \"message\": \"Status Changed Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n \"status\": false,\n \"message\": [\n     {\n         \"value\": \"\",\n         \"msg\": \"Please tell us why are you rejecting this entry\",\n         \"param\": \"reason\",\n         \"location\": \"body\"\n     }\n ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized-Error:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n \"message\": \"Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>User not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserHasDefaultPassword",
            "description": "<p>User must change default password to proceed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotActive",
            "description": "<p>Deactivated can not access resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/modules/suggestions/suggestion.routes.js",
    "groupTitle": "SuggestedEdits"
  },
  {
    "type": "get",
    "url": "/users?search=\"Admin\"&role=",
    "title": "Fetch users",
    "group": "Users",
    "name": "GetUsers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<p>Filter by user role eg mapper, administrator, ambassador, editor, staff[all roles other than mapper]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n       \"isDefaultPassword\": false,\n       \"role\": {\n           \"isDefault\": true,\n           \"_id\": \"5f34fb8ec5bac1aff484629e\",\n           \"name\": \"Administrator\",\n           \"description\": \"System Administrator, Controls the whole system\",\n           \"createdAt\": \"2020-08-13T08:36:30.120Z\",\n           \"updatedAt\": \"2020-08-13T08:36:30.120Z\",\n           \"__v\": 0\n       },\n       \"isActive\": true,\n       \"_id\": \"5f34fb8ec5bac1aff48462a6\",\n       \"firstName\": \"HDIF\",\n       \"lastName\": \"Admin\",\n       \"email\": \"hdiftanzania@gmail.com\",\n       \"verifiedAt\": \"2020-08-13T08:36:29.718Z\",\n       \"lastLogin\": \"2020-08-13T08:36:48.257Z\",\n       \"createdAt\": \"2020-08-13T08:36:30.207Z\",\n       \"updatedAt\": \"2020-08-13T08:37:54.507Z\",\n       \"__v\": 0\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/users/user.routes.js",
    "groupTitle": "Users",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserRoleNotAuthorized",
            "description": "<p>User not Authorized to access resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n  \"message\": \"Client Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users/:id/change-status",
    "title": "Change account status",
    "group": "Users",
    "name": "PatchChangeStatus",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user to change status, passed as url parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>New account status, true for active</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "reason",
            "description": "<p>Reason for changing user account status. Required when deactivating account</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"status\": true,\n\"message\": \"User account status changed successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n   \"status\": false,\n   \"message\": [\n       {\n           \"value\": \"\",\n           \"msg\": \"Please tell us why you want to deactivate this user\",\n           \"param\": \"reason\",\n           \"location\": \"body\"\n       },\n       {\n           \"value\": \"\",\n           \"msg\": \"Status is required!\",\n           \"param\": \"isActive\",\n           \"location\": \"body\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/users/user.routes.js",
    "groupTitle": "Users"
  },
  {
    "type": "patch",
    "url": "/users/:id",
    "title": "Update user",
    "group": "Users",
    "name": "PatchUsers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>user firstName</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>user lastName</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>user Phone number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"isDefaultPassword\": false,\n       \"role\": {\n           \"_id\": \"5f34fb8ec5bac1aff484629e\",\n           \"name\": \"Administrator\",\n           \"description\": \"System Administrator, Controls the whole system\"\n       },\n       \"isActive\": true,\n       \"_id\": \"5f34fb8ec5bac1aff48462a6\",\n       \"firstName\": \"Jane\",\n       \"lastName\": \"Doe\",\n       \"email\": \"jane-doe@gmail.com\",\n       \"verifiedAt\": \"2020-08-13T08:36:29.718Z\",\n       \"lastLogin\": \"2020-08-13T08:36:48.257Z\",\n       \"createdAt\": \"2020-08-13T08:36:30.207Z\",\n       \"updatedAt\": \"2020-08-13T08:37:54.507Z\",\n       \"__v\": 0\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n   \"status\": false,\n   \"message\": [\n       {\n           \"value\": \"taken-email@example.com\",\n           \"msg\": \"This email is taken!\",\n           \"param\": \"email\",\n           \"location\": \"body\"\n       },\n       {\n           \"msg\": \"Ambassador Must have a region\",\n           \"param\": \"region\",\n           \"location\": \"body\"\n       }\n   ]\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n  \"message\": \"Client Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserRoleNotAuthorized",
            "description": "<p>User not Authorized to access resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/modules/users/user.routes.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create new user",
    "group": "Users",
    "name": "PostUsers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>user firstName</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>user lastName</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>user roleId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>user Phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "region",
            "description": "<p>Ambassadors region, required for Ambassadors</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"createdAt\": \"2020-08-10T11:45:48.418Z\",\n    \"role\": {\n  \"_id\": \"5f3121d62f38c9f0cd7f5850\",\n      \"name\": \"Ambassador\"\n},\n\"firstName\": \"jane\",\n \"lastName\": \"doe\",\n \"email\": \"janedoe@example.com\",\n  \"region\": \"Manyara\",\n  \"_id\": \"5f31336cfc8b0f02943ef8a2\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n   \"status\": false,\n   \"message\": [\n       {\n           \"value\": \"\",\n           \"msg\": \"First name is required!\",\n           \"param\": \"firstName\",\n           \"location\": \"body\"\n       },\n       {\n           \"value\": \"\",\n           \"msg\": \"Last name is required!\",\n           \"param\": \"lastName\",\n           \"location\": \"body\"\n       },\n       {\n           \"value\": \"taken-email@example.com\",\n           \"msg\": \"This email is taken!\",\n           \"param\": \"email\",\n           \"location\": \"body\"\n       },\n       {\n           \"msg\": \"Ambassador Must have a region\",\n           \"param\": \"region\",\n           \"location\": \"body\"\n       }\n   ]\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n  \"message\": \"Client Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserRoleNotAuthorized",
            "description": "<p>User not Authorized to access resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/modules/users/user.routes.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:id/change-role",
    "title": "Change user role",
    "group": "Users",
    "name": "PutChangeRole",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>LoggedIn User jwt for Authorization.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user, passed as url parameter</p>"
          }
        ],
        "Request message body": [
          {
            "group": "Request message body",
            "type": "String",
            "optional": false,
            "field": "roleID",
            "description": "<p>The Id of new role</p>"
          },
          {
            "group": "Request message body",
            "type": "String",
            "optional": true,
            "field": "region",
            "description": "<p>User region. Required if  new role is Ambassador</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"isDefaultPassword\": false,\n       \"role\": {\n           \"_id\": \"5f34fb8ec5bac1aff484629e\",\n           \"name\": \"Administrator\",\n           \"description\": \"System Administrator, Controls the whole system\"\n       },\n       \"isActive\": true,\n       \"_id\": \"5f34fb8ec5bac1aff48462a6\",\n       \"firstName\": \"Jane\",\n       \"lastName\": \"Doe\",\n       \"email\": \"jane-doe@gmail.com\",\n       \"verifiedAt\": \"2020-08-13T08:36:29.718Z\",\n       \"lastLogin\": \"2020-08-13T08:36:48.257Z\",\n       \"createdAt\": \"2020-08-13T08:36:30.207Z\",\n       \"updatedAt\": \"2020-08-13T08:37:54.507Z\",\n       \"__v\": 0\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UNPROCESSABLE ENTITY",
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n   \"status\": false,\n   \"message\": [\n       {\n           \"value\": \"\",\n           \"msg\": \"Ambassador must have a region\",\n           \"param\": \"region\",\n           \"location\": \"body\"\n       }\n   ]\n}",
          "type": "json"
        },
        {
          "title": "Forbidden-Error:",
          "content": " HTTP/1.1 403 Forbidden\n{\n \"status\": false,\n  \"message\": \"Client Account deactivated, contact administrator for more details.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserRoleNotAuthorized",
            "description": "<p>User not Authorized to access resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/modules/users/user.routes.js",
    "groupTitle": "Users"
  }
] });
