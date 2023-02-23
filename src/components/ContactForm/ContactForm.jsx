import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const formData = React.useRef();

    let navigate = useNavigate(); // current location of component
    
    const queryForm = (e) => {
        e.preventDefault()
        console.log(formData.current) // get current state of form
        const data = new FormData(formData.current); // generate iterator
        const contact = Object.fromEntries(data); // convert iterator to object
        console.log(contact);

        e.target.reset(); // Reset form

        toast.success("Your message was sent successfully!");
        navigate("/"); // Redirect to homepage
    }

    return (
        <div className="container" style={{marginTop:"20px"}}>
            <form onSubmit={queryForm} ref={formData}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" name="name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="number" className="form-control" name="phone" />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" name="message" rows={3} defaultValue={""} />
            </div>

            <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;