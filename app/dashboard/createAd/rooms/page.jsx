import React from "react"

const page = () => {
    const submitForm = async (formData) => {
        // const name = formdata.get 
    }
    return (
        <>
        <form>
            <input type="text" name="location" required placeholder="location" className="input w-full max-w-xl" />
            <input type="text" name="bedrooms" required placeholder="bedrooms" className="input w-full max-w-xl" />
            <input type="text" name="pets" required placeholder="pets" className="input w-full max-w-xl" />
            <input type="text" name="price" required placeholder="price" className="input w-full max-w-xl" />
            <input type="text" name="smoking" required placeholder="smoking" className="input w-full max-w-xl" />
            {/* <textarea className=""></textarea> */}


        </form>

        </>
    )
}

export default page
