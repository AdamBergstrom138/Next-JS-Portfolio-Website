"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendgrid";
exports.ids = ["pages/api/sendgrid"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "(api)/./pages/api/sendgrid.js":
/*!*******************************!*\
  !*** ./pages/api/sendgrid.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);\n\n_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().setApiKey(process.env.SENDGRID_API_KEY);\nasync function sendEmail(req, res) {\n    try {\n        await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().send({\n            to: \"abx1138@gmail.com\",\n            from: \"abx1138@gmail.com\",\n            subject: `[Lead from website] : ${req.body.subject}`,\n            html: `<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n      <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\">\n      \n        <title>The HTML5 Herald</title>\n        <meta name=\"description\" content=\"The HTML5 Herald\">\n        <meta name=\"author\" content=\"SitePoint\">\n      <meta http-equiv=\"Content-Type\" content=\"text/html charset=UTF-8\" />\n      \n        <link rel=\"stylesheet\" href=\"css/styles.css?v=1.0\">\n      \n      </head>\n      <body>\n      <div class=\"img-container\" style=\"display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';\">              \n            </div>\n            <div class=\"container\" style=\"margin-left: 20px;margin-right: 20px;\">\n            <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>\n            <div style=\"font-size: 16px;\">\n            <p>Phone Number:</p>\n            <p>${req.body.phoneNumber}</p>\n            <p>Message:</p>\n            <p>${req.body.message}</p>\n            <br>\n    </body>\n    </html>`\n        });\n    } catch (error) {\n        // console.log(error);\n        return res.status(error.statusCode || 500).json({\n            error: error.message\n        });\n    }\n    return res.status(200).json({\n        error: \"\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendEmail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZGdyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDQSwrREFBa0IsQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7QUFFL0MsZUFBZUMsVUFBVUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDakMsSUFBSTtRQUNGLE1BQU1QLDBEQUFhLENBQUM7WUFDbEJTLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxTQUFTLENBQUMsc0JBQXNCLEVBQUVMLElBQUlNLElBQUksQ0FBQ0QsT0FBTyxDQUFDLENBQUM7WUFDcERFLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBaUI4QixFQUFFUCxJQUFJTSxJQUFJLENBQUNFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRVIsSUFBSU0sSUFBSSxDQUFDRyxLQUFLLENBQUM7OztlQUdyRixFQUFFVCxJQUFJTSxJQUFJLENBQUNJLFdBQVcsQ0FBQzs7ZUFFdkIsRUFBRVYsSUFBSU0sSUFBSSxDQUFDSyxPQUFPLENBQUM7OztXQUd2QixDQUFDO1FBQ1Y7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZCxzQkFBc0I7UUFDdEIsT0FBT1gsSUFBSVksTUFBTSxDQUFDRCxNQUFNRSxVQUFVLElBQUksS0FBS0MsSUFBSSxDQUFDO1lBQUVILE9BQU9BLE1BQU1ELE9BQU87UUFBQztJQUN6RTtJQUVBLE9BQU9WLElBQUlZLE1BQU0sQ0FBQyxLQUFLRSxJQUFJLENBQUM7UUFBRUgsT0FBTztJQUFHO0FBQ3hDO0FBRUEsaUVBQWViLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tbmV4dGpzLy4vcGFnZXMvYXBpL3NlbmRncmlkLmpzPzUwMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNlbmRncmlkIGZyb20gXCJAc2VuZGdyaWQvbWFpbFwiO1xuXG5zZW5kZ3JpZC5zZXRBcGlLZXkocHJvY2Vzcy5lbnYuU0VOREdSSURfQVBJX0tFWSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRFbWFpbChyZXEsIHJlcykge1xuICB0cnkge1xuICAgIGF3YWl0IHNlbmRncmlkLnNlbmQoe1xuICAgICAgdG86IFwiYWJ4MTEzOEBnbWFpbC5jb21cIiwgLy8gWW91ciBlbWFpbCB3aGVyZSB5b3UnbGwgcmVjZWl2ZSBlbWFpbHNcbiAgICAgIGZyb206IFwiYWJ4MTEzOEBnbWFpbC5jb21cIiwgLy8geW91ciB3ZWJzaXRlIGVtYWlsIGFkZHJlc3MgaGVyZVxuICAgICAgc3ViamVjdDogYFtMZWFkIGZyb20gd2Vic2l0ZV0gOiAke3JlcS5ib2R5LnN1YmplY3R9YCxcbiAgICAgIGh0bWw6IGA8IURPQ1RZUEUgaHRtbCBQVUJMSUMgXCItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZFwiPlxuICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XG4gICAgICBcbiAgICAgICAgPHRpdGxlPlRoZSBIVE1MNSBIZXJhbGQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGhlIEhUTUw1IEhlcmFsZFwiPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIlNpdGVQb2ludFwiPlxuICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWwgY2hhcnNldD1VVEYtOFwiIC8+XG4gICAgICBcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3Mvc3R5bGVzLmNzcz92PTEuMFwiPlxuICAgICAgXG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7Ym9yZGVyLXJhZGl1czogNXB4O292ZXJmbG93OiBoaWRkZW47IGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhJywgJ3VpLXNhbnMnO1wiPiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAyMHB4O21hcmdpbi1yaWdodDogMjBweDtcIj5cbiAgICAgICAgICAgIDxoMz5Zb3UndmUgZ290IGEgbmV3IG1haWwgZnJvbSAke3JlcS5ib2R5LmZ1bGxuYW1lfSwgdGhlaXIgZW1haWwgaXM6IOKcie+4jyR7cmVxLmJvZHkuZW1haWx9IDwvaDM+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPlxuICAgICAgICAgICAgPHA+UGhvbmUgTnVtYmVyOjwvcD5cbiAgICAgICAgICAgIDxwPiR7cmVxLmJvZHkucGhvbmVOdW1iZXJ9PC9wPlxuICAgICAgICAgICAgPHA+TWVzc2FnZTo8L3A+XG4gICAgICAgICAgICA8cD4ke3JlcS5ib2R5Lm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgPGJyPlxuICAgIDwvYm9keT5cbiAgICA8L2h0bWw+YCxcbiAgfSk7XG59IGNhdGNoIChlcnJvcikge1xuICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XG4gIHJldHVybiByZXMuc3RhdHVzKGVycm9yLnN0YXR1c0NvZGUgfHwgNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG59XG5cbnJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGVycm9yOiBcIlwiIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZW5kRW1haWw7Il0sIm5hbWVzIjpbInNlbmRncmlkIiwic2V0QXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlNFTkRHUklEX0FQSV9LRVkiLCJzZW5kRW1haWwiLCJyZXEiLCJyZXMiLCJzZW5kIiwidG8iLCJmcm9tIiwic3ViamVjdCIsImJvZHkiLCJodG1sIiwiZnVsbG5hbWUiLCJlbWFpbCIsInBob25lTnVtYmVyIiwibWVzc2FnZSIsImVycm9yIiwic3RhdHVzIiwic3RhdHVzQ29kZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendgrid.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sendgrid.js"));
module.exports = __webpack_exports__;

})();