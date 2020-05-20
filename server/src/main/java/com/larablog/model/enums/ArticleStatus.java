package com.larablog.model.enums;

public enum ArticleStatus {
    /**
     *  Default Status
     */
    PUBLISH,
    /**
     * The article will be saved but not published
     */
    DRAFT,
    /**
     * Soft-Delete : The article will be marked as delte so it will not be displaed in client side
     */
    DELTE
}
