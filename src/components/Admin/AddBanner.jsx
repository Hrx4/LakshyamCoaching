import React, {useState} from "react";


const AddBanner = () => {

    const [link, setLink] = useState('');
    const [image, setImage] = useState('');

    return (
        <>
            <div className="form-container" style={{ marginTop: 60, marginBottom: 50 }}>
                <form>

                    <div className="form-group">
                        <label>Banner Link :</label>
                        <input type="text" value={link} required/>
                    </div>
                    <div className="form-group">
                        <label>Banner Image:</label>
                        <input type="file" accept="image/*" value={image} />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddBanner;