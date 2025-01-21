import React from 'react';
import { useFormik } from 'formik';
import  { useEffect, useState } from 'react';
import axios from "axios";
import * as Yup from 'yup';
import style from "./style.module.css";
import {Helmet} from "react-helmet";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function Add() {

  const [arrivals, setArrivals] = useState([]); 

 
  
  useEffect(() => {
    const fetchArrivals = async () => {
      try {
        const response = await axios.get('http://localhost:3000/teams');
        setArrivals(response.data); 
      } catch (error) {
        console.error('Error fetching arrivals:', error);
      }
    };

    fetchArrivals();
  }, []); 

  const formik = useFormik({
    initialValues: {
      name: '',
      profession: "",
      salary: "",
      image: "", 
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .min(3, 'Must be 3 characters more')
        .required('Required'),
      profession: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .min(10, 'Must be 10 characters more')
        .required('Required'),
      salary: Yup.number()
        .max(10000, 'Year must be less than 10000')
        .min(1, 'Year must be greater than 1')
        .required('Required'),
      image: Yup.string()
        .required('Required'), 
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:3000/teams", values);
        console.log("Product added successfully:", response.data);
        formik.resetForm(); 

        const updatedResponse = await axios.get('http://localhost:3000/teams');
        setArrivals(updatedResponse.data); 
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
  });
  async function handleDelete(id) {
    
      await axios.delete(`http://localhost:3000/teams/${id}`);
      setArrivals((prevArrivals) => prevArrivals.filter((arrival) => arrival._id !== id));
  }
  return (
    
    <div className={style.add} style={{ width: "100%", minHeight: "600px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Helmet>
                <title>Add</title>
            </Helmet>
      <form id={style.addform} onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          id="name"
          name="name"
          type="text" 
          onChange={formik.handleChange}
          checked={formik.values.name} 
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="profession">Profession</label>
        <input
          id="profession"
          name="profession"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.profession}
        />
        {formik.touched.profession && formik.errors.profession ? (
          <div style={{ color: "red" }}>{formik.errors.profession}</div>
        ) : null}

        <label htmlFor="salary">Salary</label>
        <input
          id="salary"
          name="salary"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.salary}
        />
        {formik.touched.salary && formik.errors.salary ? (
          <div style={{ color: "red" }}>{formik.errors.salary}</div>
        ) : null}

        <label htmlFor="image">Image </label>
        <input
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <div style={{ color: "red" }}>{formik.errors.image}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>

      <div className="container">
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Profession</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {arrivals.map((arrival,index)=>(
           <tr key={arrival._id}>
           <td>{arrival._id}</td>
           <td>{arrival.name}</td>
           <td>{arrival.profession}</td>
           <td>{arrival.salary}$</td>
           <td>
            <button className='btn-danger btn' onClick={()=>handleDelete(arrival._id)} >Delete</button>
           </td>
         </tr>
       
         
         ))}
        </tbody>
      </Table>
    </div>
    </div>
  );
}

export default Add;

