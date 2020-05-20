package com.larablog.model.enums;

public enum CommentStatus {
    /**
     * Default status(same as article)
     */
    PUBLISH,
    /**
     * Soft delete : mark comment as delete
     */
    DELETE
}
