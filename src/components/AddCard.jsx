import Input from 'partials/Input'
import React from 'react'

const AddCard = ({
  title,
  subTitle,
  desc,
  address,
  phone,
  url,
  alt,
  onChange,
}) => {
  return (
    <>
     <div className="col col-md-8 mb-3 d-flex justify-content-center gap-3">
        <Input
          Class="w-100"
          placeholder="Title"
          id="title"
          type="text"
          value={title}
          onChange={onChange}
        />
        <Input
          Class="w-100"
          placeholder="Sub Title"
          id="subTitle"
          type="text"
          value={subTitle}
          onChange={onChange}
        />
        <Input
          Class="w-100"
          placeholder="alt"
          id="alt"
          type="text"
          value={alt}
          onChange={onChange}
        />
      </div>
      <div className="col col-md-8 mb-3">
        <Input
          placeholder="Description"
          id="description"
          type="text"
          value={desc}
          onChange={onChange}
        />
      </div>
      <div className="col col-md-8 mb-3 d-flex justify-content-center gap-3">
        <Input
          Class="w-100"
          placeholder="Address"
          id="address"
          type="text"
          value={address}
          onChange={onChange}
        />
        <Input
          Class="w-100"
          placeholder="Phone"
          id="phone"
          type="text"
          value={phone}
          onChange={onChange}
        />
      </div>
      <div className="col col-md-8">
        <Input
          placeholder="Image URL"
          id="url"
          type="text"
          value={url}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default AddCard