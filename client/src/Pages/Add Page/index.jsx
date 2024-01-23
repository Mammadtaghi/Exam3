import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import style from "./index.module.scss";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { usePro } from '../../Context/ProContext';
import axios from 'axios';

function AddPage() {

    const { Pro, setPro, GetPros, isLoading } = usePro()

    const [search, setSearch] = useState('')

    const [sort, setSort] = useState(null)

    function CheckStr(item) {
        if (typeof item === "string") {
            return item.toLowerCase()
        } else {
            return item
        }
    }

    async function Post(values) {
        try {
            const res = await axios.post("http://localhost:3000/pro", values)
            console.log(res.data);
            GetPros()
        } catch (error) {
            console.log(error);
        }
    }

    async function DeletePro(id) {
        try {
            const res = await axios.delete(`http://localhost:3000/pro/${id}`)
            console.log(res.data);
            GetPros()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Helmet>
                <title>AddPage</title>
            </Helmet>
            <div id={style.AddPage}>
                <Formik
                    initialValues={{ title: '', image: '', price: '' }}
                    validationSchema={Yup.object({
                        title: Yup.string()
                            .max(25, 'Must be 25 characters or less')
                            .required('Required'),
                        image: Yup.string().required('Required'),
                        price: Yup.number().min(0, "Can't be negative!").required('Required'),
                    })}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values);
                        Post(values)
                        resetForm()
                    }}
                >
                    <Form className={style.form}>
                        <label htmlFor="title">title</label>
                        <Field name="title" type="text" />
                        <ErrorMessage name="title" />

                        <label htmlFor="image">Image</label>
                        <Field name="image" type="text" />
                        <ErrorMessage name="image" />

                        <label htmlFor="price">Price</label>
                        <Field name="price" type="Number" min={0} />
                        <ErrorMessage name="price" />

                        <button type="submit">Add</button>
                    </Form>
                </Formik>
                <input type="text" onChange={(e) => setSearch(e.target.value)} />
                <button onClick={() => setSort(null)}>Default</button>
                <button onClick={() => setSort({ property: 'title', asc: true })}>A-Z</button>
                <button onClick={() => setSort({ property: 'title', asc: false })}>Z-A</button>
                <button onClick={() => setSort({ property: 'price', asc: true })}>Price<i className="fa-solid fa-caret-up"></i></button>
                <button onClick={() => setSort({ property: 'price', asc: false })}>Price<i className="fa-solid fa-caret-down"></i></button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>title</th>
                            <th>Price</th>
                            <th>Buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? <tr><td>Loading. . .</td></tr> :
                            Pro.filter(x => x.title.toLowerCase().includes(search.toLowerCase()))
                                .sort((a, b) => {
                                    if (sort && sort.asc) {
                                        return (CheckStr(a[sort.property]) > CheckStr(b[sort.property])) ? 1 : ((CheckStr(b[sort.property]) > CheckStr(a[sort.property])) ? -1 : 0)
                                    } else if (sort && sort.asc === false) {
                                        return (CheckStr(a[sort.property]) < CheckStr(b[sort.property])) ? 1 : ((CheckStr(b[sort.property]) < CheckStr(a[sort.property])) ? -1 : 0)
                                    } else {
                                        return null
                                    }
                                })
                                .map(item => (
                                    <tr key={item._id}>
                                        <td>
                                            <div className={style.imgBox}>
                                                <img src={item.image} alt="" />
                                            </div>
                                        </td>
                                        <td>{item.title}</td>
                                        <td>${item.price}</td>
                                        <td><button onClick={() => DeletePro(item._id)}>Delete</button></td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AddPage