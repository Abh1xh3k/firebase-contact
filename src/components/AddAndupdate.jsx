import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { db } from "../config/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemavalidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
});

function AddAndupdate({ isOpen, onClose, isUpdate, contact, user }) {
  const AddContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, {...contact, _id:user.email});
      onClose();
      toast.success("Contact Created Sucessfully");
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Sucessfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      {" "}
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemavalidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(Values) => {
            console.log(Values);
            isUpdate ? UpdateContact(Values, contact.id) : AddContact(Values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className=" flex flex-col gap-1 ">
              <label htmlFor="name">Name</label>
              <Field type="name" name="name" className="border h-10" />
              <div className="text-red-600">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="email">E-mail</label>
              <Field type="email" name="email" className="border h-10" />
              <div className="text-red-600">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button className="bg-orange  px-3 py-1.5 border self-end">
              {isUpdate ? "update" : "add"} Contacts
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}
export default AddAndupdate;
