/**
 * HTTP action methods.
 */
export enum Method {
    Delete = "DELETE",
    Get = "GET",
    Patch = "PATCH",
    Post = "POST",
    Put = "PUT",
}

/**
 * HTTP header names.
 */
export enum Header {
    ContentType = "Content-Type",
}


/**
 * Content types.
 */
export enum Type {
    Html = "text/html",
    JSON = "application/json",
    Plain = "text/plain",
}

/**
 * HTTP response code.
 */

 export enum Status {
     Ok = 200,
     Unauthorized = 401,
     NotFound = 404,
     InternalServerError = 500,
 }