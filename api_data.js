define({ "api": [
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
          "content": "   {\n \"token\": \"{token}\",\n \"user\": {\n     \"isDefaultPassword\": true,\n     \"_id\": \"5f27bc8a956b8d3272619110\",\n     \"firstName\": \"HDIF\",\n     \"lastName\": \"Admin\",\n     \"email\": \"hdiftanzania@gmail.com\",\n     \"verifiedAt\": \"2020-08-03T07:28:10.349Z\",\n     \"lastLogin\": null,\n     \"createdAt\": \"2020-08-03T07:28:10.656Z\",\n     \"updatedAt\": \"2020-08-03T07:28:10.656Z\",\n     \"__v\": 0\n }\n}",
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
    "type": "get",
    "url": "/stakeholders?limit=50&&page=1&&search=softwares",
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": [\n       {\n           \"location\": {\n               \"coordinates\": [\n                   234,\n                   -1234\n               ]\n           },\n           \"approvalStatus\": {\n               \"status\": \"Approved\",\n                \"user\": {\n                 \"_id\": \"5f3f642804d4321a0964153e\",\n                 \"firstName\": \"HDIF\",\n                 \"lastName\": \"Admin\",\n                 \"email\": \"hdiftanzania@gmail.com\"\n             },\n               \"reason\": null\n           },\n           \"socialMedias\": [\n               {\n                   \"twitter\": \"https://twitter.com/ipfsotwares\"\n               }\n           ],\n           \"services\": [],\n          \"mapper\": {\n             \"_id\": \"5f40d184cdd00b3e7075fdd3\",\n             \"firstName\": \"Jane\",\n             \"lastName\": \"Doe\",\n             \"email\": \"jdoe@example.com\"\n         },\n           \"isSelfMapped\": false,\n           \"associatedHubs\": [],\n           \"sectors\": [],\n           \"_id\": \"5f40f6699c684d6ee106ce2d\",\n           \"street\": \"Kimara\",\n           \"name\": \"iPF softwares\",\n           \"email\": \"info@ipfsoftwares.com\",\n           \"region\": \"Dar Es Salaam\",\n           \"challengesAttended\": [],\n           \"attachments\": [],\n           \"createdAt\": \"2020-08-22T10:41:45.437Z\",\n           \"updatedAt\": \"2020-08-24T08:37:13.008Z\",\n           \"__v\": 0\n       }\n   ],\n   \"total\": 2,\n   \"limit\": 50,\n   \"pageCount\": 1,\n   \"page\": 1,\n   \"pagingCounter\": 1,\n   \"hasPrevPage\": false,\n   \"hasNextPage\": false,\n   \"prev\": null,\n   \"next\": null\n}",
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
            "optional": false,
            "field": "region",
            "description": "<p>The region of stakeholder</p>"
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
            "type": "Object",
            "optional": true,
            "field": "contactPerson",
            "description": "<p>The stakeholder contact person details ie name, email, phone</p>"
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
            "description": "<p>Innovation types</p>"
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
            "type": "Object",
            "optional": true,
            "field": "implementer",
            "description": "<p>Implementer details</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"location\": {\n     \"type\": \"Point\",\n     \"coordinates\": [\n         -104.9903,\n         39.7392\n     ]\n },\n \"approvalDetails\": {\n     \"status\": \"Pending\",\n     \"user\": null\n },\n \"socialMedias\": [\n     {\n         \"twitter\": \"https://twitter.com/ipfsotwares\"\n     }\n ],\n \"services\": [],\n \"mapper\": \"5f50bc8c282c1300172e8fb6\",\n \"isSelfMapped\": false,\n \"associatedHubs\": [],\n \"sector\": null,\n \"innovationStages\": [],\n \"innovationTypes\": [],\n \"_id\": \"5f50d88e84f4cb0017207339\",\n \"locationName\": \"Kimara\",\n \"name\": \"iPF softwares\",\n \"email\": \"info@ipfsoftwares.com\",\n \"contactPerson\": {\n     \"name\": \"Jane Ulomi\",\n     \"email\": \"janedoe@gmail.com\"\n },\n \"region\": \"Dar Es Salaam\",\n \"challenges\": [],\n \"implementer\": {\n     \"name\": \"John Ulomi\",\n     \"email\": \"johndoe@ipfsoftwares.com\"\n },\n \"attachments\": [],\n \"createdAt\": \"2020-09-03T11:50:38.838Z\",\n \"updatedAt\": \"2020-09-03T11:50:38.838Z\",\n \"__v\": 0\n}",
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
    "type": "get",
    "url": "/users",
    "title": "Fetch staff-users",
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
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "users/:id/change-status",
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
          "content": "{\n\"createdAt\": \"2020-08-10T11:45:48.418Z\",\n\"firstName\": \"jane\",\n \"lastName\": \"doe\",\n \"email\": \"janedoe@example.com\",\n \"phone\": \"255799999999\",\n  \"_id\": \"5f31336cfc8b0f02943ef8a2\"\n}",
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
        }
      ]
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
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/users/user.routes.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "users/:id/change-role",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>roleID</p>"
          },
          {
            "group": "Parameter",
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
          "content": "{\n\"status\": true,\n\"message\": \"User role changed successfully\"\n}",
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
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/users/user.routes.js",
    "groupTitle": "Users"
  }
] });
