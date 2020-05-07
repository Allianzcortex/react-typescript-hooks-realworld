import React, {useEffect, Fragment, useState} from "react";
import ReactPaginate from 'react-paginate';
import 'antd/dist/antd.css';
// TODO Have tried to use other pagination components like 'react-paginate'
// but cannot find a better alternative for it. It is really overkilled if
// we import the whole UI library only for 1 component
import { Pagination as AntdPagination } from 'antd';
/**
 * This is a wrapper for react-paginate(https://www.npmjs.com/package/react-paginate)
 * by @Allianzcortex
 * @param props
 * @constructor
 */
function Pagination(props) {

    return(
        <Fragment>
        <AntdPagination size="small" defaultCurrent={6} total={500} />
        </Fragment>
    )
}

export default Pagination
