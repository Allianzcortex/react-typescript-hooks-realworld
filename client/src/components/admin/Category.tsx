import React, {FC, useState, Fragment, useEffect, useRef} from 'react';
import {Button, Card, Input, Label} from "semantic-ui-react";
import {setNotification} from "../../store/actions/test.action";
import {useDispatch} from "react-redux";
import {categoryService} from "../../service/category.service";

export const Category: FC<{}> = () => {

    // const categoryList = ['12', '34', '56']
    const [categoryList, setCategoryList] = useState([])
    const retrieveAllCategories = () => {
        categoryService.getAllCategories().then(
            res => {
                console.log(res)
                setCategoryList(res.data.data.map((item: any) => (item.name)))
            }
        ).catch(
            error => console.log(error)
        )
    }
    useEffect(retrieveAllCategories, [])
    const dispatch = useDispatch()
    const [currentCat, setCurrentCat] = useState("");
    let categoryInput = useRef<any>();

    const editCategory = (category: string) => {
        console.log(category);
        setCurrentCat(category);
        categoryInput?.current?.focus();
    }

    const setNewCategory = (e: any) => {
        console.log(e.target.value)
        setCurrentCat(e.target.value)
    }

    return (
        <Fragment>
            <Card>
                <Card.Content header='Edit Category'/>
                <Card.Content>
                    {categoryList.map(category => (
                        <div style={{
                            display: "flex", justifyContent: "space-between",
                            marginBottom: "5px"
                        }}>
                            <Label color='purple'>
                                {category}
                            </Label>
                            <div>
                                <Button onClick={() => editCategory(category)} color="yellow">Edit</Button>
                                <Button color="red">Delete</Button>
                            </div>
                        </div>
                    ))}

                </Card.Content>
                <Card.Content extra>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Input value={currentCat} ref={categoryInput} onChange={setNewCategory}/>

                        <Button color="green">Save</Button>
                    </div>

                </Card.Content>
            </Card>
        </Fragment>
    )
}
