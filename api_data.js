define({ "api": [
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
          "content": "[\n{\n   _id: 5f288c53f882e37de9101698,\n   name: 'Administrator',\n   description: 'System Administrator, Controls the whole system',\n   createdAt: 2020-08-03T22:14:43.583Z,\n   updatedAt: 2020-08-03T22:14:43.583Z,\n   __v: 0\n },\n{\n   _id: 5f288c53f882e37de91016a1,\n   name: 'Ambassador',\n   description: 'Regional Ambassador, Approves regional mapping entries',\n   createdAt: 2020-08-03T22:14:43.698Z,\n   updatedAt: 2020-08-03T22:14:43.698Z,\n   __v: 0\n },\n{\n   _id: 5f288c53f882e37de91016a2,\n   name: 'Editor',\n   description: 'Editor, Can view all mapping information and approve mapping entries',\n   createdAt: 2020-08-03T22:14:43.700Z,\n   updatedAt: 2020-08-03T22:14:43.700Z,\n   __v: 0\n }\n]",
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
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n   _id: 5f288c53f882e37de9101698,\n   name: 'Administrator',\n   description: 'System Administrator, Controls the whole system',\n   createdAt: 2020-08-03T22:14:43.583Z,\n   updatedAt: 2020-08-03T22:14:43.583Z,\n   __v: 0\n },\n{\n   _id: 5f288c53f882e37de91016a1,\n   name: 'Ambassador',\n   description: 'Regional Ambassador, Approves regional mapping entries',\n   createdAt: 2020-08-03T22:14:43.698Z,\n   updatedAt: 2020-08-03T22:14:43.698Z,\n   __v: 0\n },\n{\n   _id: 5f288c53f882e37de91016a2,\n   name: 'Editor',\n   description: 'Editor, Can view all mapping information and approve mapping entries',\n   createdAt: 2020-08-03T22:14:43.700Z,\n   updatedAt: 2020-08-03T22:14:43.700Z,\n   __v: 0\n }\n]",
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
          "content": "[\n    {\n     \"_id\": \"5f288c53f882e37de9101698\",\n     \"name\": \"Administrator\",\n     \"description\": \"System Administrator, Controls the whole system\",\n     \"createdAt\": \"2020-08-03T22:14:43.583Z\",\n     \"updatedAt\": \"2020-08-03T22:14:43.583Z\",\n     \"__v\": 0,\n     \"rolePermissions\": {\n         \"permissions\": [\n             {\n                 \"_id\": \"5f288c53f882e37de9101691\",\n                 \"moduleName\": \"users\",\n                 \"displayName\": \"Can create,update and delete staff \",\n                 \"genericName\": \"write-staff\",\n                 \"createdAt\": \"2020-08-03T22:14:43.564Z\",\n                 \"updatedAt\": \"2020-08-03T22:14:43.564Z\",\n                 \"__v\": 0\n             },\n             {\n                 \"_id\": \"5f288c53f882e37de9101692\",\n                 \"moduleName\": \"users\",\n                 \"displayName\": \"Can view staffs\",\n                 \"genericName\": \"read-staff\",\n                 \"createdAt\": \"2020-08-03T22:14:43.567Z\",\n                 \"updatedAt\": \"2020-08-03T22:14:43.567Z\",\n                 \"__v\": 0\n             }\n         ]\n     },\n {\n     \"_id\": \"5f288c53f882e37de91016a1\",\n     \"name\": \"Ambassador\",\n     \"description\": \"Regional Ambassador, Approves regional mapping entries\",\n     \"createdAt\": \"2020-08-03T22:14:43.698Z\",\n     \"updatedAt\": \"2020-08-03T22:14:43.698Z\",\n     \"__v\": 0,\n     \"rolePermissions\": {\n         \"permissions\": []\n     }\n }\n }\n]",
          "type": "json"
        }
      ]
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
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5f2a57d6d101d3248afefc19\",\n   \"name\": \"New Role\",\n   \"description\": \"This is new role\",\n   \"createdAt\": \"2020-08-05T06:55:18.554Z\",\n   \"updatedAt\": \"2020-08-05T06:55:18.554Z\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/accessControl/accessControl.routes.js",
    "groupTitle": "AccessControl",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n \"status\": false,\n \"message\": \"Not Authenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 403 Unauthorized\n{\n \"status\": false,\n \"message\": \"Change Default Password.\"\n}",
          "type": "json"
        }
      ]
    }
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
          "content": " HTTP/1.1 422 UNPROCESSABLE ENTITY\n{\n   \"status\": false,\n  \"message\": [\n      {\n          \"value\": \"not_current_password\",\n          \"msg\": \"The currentPassword field is required and must match your current password\",\n          \"param\": \"currentPassword\",\n          \"location\": \"body\"\n      },\n      {\n          \"value\": \"\",\n          \"msg\": \"A new password has to be at least 8 characters long, must contain capital later, a special character and a number\",\n          \"param\": \"password\",\n          \"location\": \"body\"\n      },\n      {\n          \"value\": \"does_not_match\",\n          \"msg\": \"Password confirmation field does not match password\",\n          \"param\": \"passwordConfirmation\",\n          \"location\": \"body\"\n      }\n  ]\n}",
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
  }
] });
