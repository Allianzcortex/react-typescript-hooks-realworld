import React, {FC, useState, Fragment, useEffect, useRef} from 'react';
import {Button, Card, Input, Label} from "semantic-ui-react";
import {setNotification} from "../../store/actions/test.action";
import {useDispatch} from "react-redux";
// @ts-ignore
import {Category as CategoryInterface} from "../../types/interfaces";
import {categoryService} from "../../service/category.service";
import {toast} from 'react-toastify';

export const Category: FC<{}> = () => {

    // const categoryList = ['12', '34', '56']
    const [categoryList, setCategoryList] = useState<any[]>([]);
    const retrieveAllCategories = () => {
        categoryService.getAllCategories().then(
            res => {
                console.log(res)
                setCategoryList(res.data.data)
            }
        ).catch(
            error => console.log(error)
        )
    }
    useEffect(retrieveAllCategories, [])
    const dispatch = useDispatch()
    const [currentCat, setCurrentCat] = useState<CategoryInterface>();
    let categoryInput = useRef<any>();

    const editCategory = (category: CategoryInterface) => {
        console.log(category);
        setCurrentCat(category);
        categoryInput?.current?.focus();
    }

    const setNewCategory = (e: any) => {
        console.log(e.target.value)
        setCurrentCat({id: null, name: e.target.value})
    }

    const saveCategory = async () => {
        toast.success('Category updated successfully')
        console.log(currentCat?.name);
        await categoryService.saveCategory(currentCat?.name!);
        retrieveAllCategories();
    }

    const deleteCategory = async (category: CategoryInterface) => {
        toast.success('Delete Category successfully');
        await categoryService.deleteCategory(category?.name!);
        retrieveAllCategories();
    }

    return (
        <Fragment>
            <Card>
                <Card.Content header='Edit Category'/>
                <Card.Content>
                    {categoryList.map(category => (
                        <div key={1} style={{
                            display: "flex", justifyContent: "space-between",
                            marginBottom: "5px"
                        }}>
                            <Label color='purple'>
                                {category.name}
                            </Label>
                            <div>
                                <Button onClick={() => editCategory(category)} color="yellow">Edit</Button>
                                <Button onClick={() => deleteCategory(category)} color="red">Delete</Button>
                            </div>
                        </div>
                    ))}

                </Card.Content>
                <Card.Content extra>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Input value={currentCat?.name} ref={categoryInput} onChange={setNewCategory}/>

                        <Button color="green" onClick={saveCategory}>Save</Button>
                    </div>

                </Card.Content>
            </Card>
        </Fragment>
    )
}
