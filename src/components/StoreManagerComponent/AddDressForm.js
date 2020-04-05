import React, {useState } from 'react';
import { Form, Checkbox, Button} from 'antd';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import ImageUpload from './ImageUpload';

function AddDressForm() {

    const [Images, setImages] = useState([])
    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const [DressCode, setDressCode] = useState("");
    const [ContinentValue, setContinentValue] = useState(1);
    const[DressPrice, setDressPrice] = useState("");
    const[DressDiscount, setDressDiscount] = useState("");

    const [isExtraSmallChecked, setExtraSmallChecked] = React.useState(true);
    const [isSmallChecked, setSmallChecked] = React.useState(true);
    const [isMediumChecked, setMediumChecked] = React.useState(true);
    const [isLargeChecked, setLargeChecked] = React.useState(true);
    const [isExtraLargeChecked, setExtraLargeChecked] = React.useState(true);

    const Continents = [
        { key: 1, value: "   T-Shirt" },
        { key: 2, value: "   Blouse" },
        { key: 3, value: "   Skirt" },
        { key: 4, value: "   Denim" },
        { key: 5, value: "   Trouser" },
        { key: 6, value: "   Frock" },
        { key: 7, value: "   Shirt" }
    ]

    const onCodeChange = (event) =>  {
        setDressCode(event.currentTarget.value)
    }

    const onContentSelectChange = (event) => {
        setContinentValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setDressPrice(event.currentTarget.value)
    }

    const onDiscChange = (event) => {
        setDressDiscount(event.currentTarget.value)
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <h3 class = "x"> !!! Upload Item Here !!! </h3>

            <Form onSubmit>
            <br /> <br />
             <label> Enter Dress Image </label> <br />
                 <div> <ImageUpload refreshFunction = {updateImages} /> </div>

                <br /> <br />
        
                <label> Dress Code </label> <br/>
                <input onChange = {onCodeChange} values = {DressCode} style = {{width: '700px', height: '45px', backgroundColor: '#f4f4f4', borderRadius: '.5rem'}}/> 
                <br/> <br/>

                <label> Category </label> 
                  <ToggleButtonGroup type = "radio" name = "category" style = {{marginLeft: '3rem', color: 'black' }} defaultValue = {1} >
                      <ToggleButton className = "btn" value = {1}> Men </ToggleButton>
                      <ToggleButton value = {2}> Women </ToggleButton>
                      <ToggleButton value = {3}> Kids </ToggleButton>
                </ToggleButtonGroup>
                <br/> <br/>

                <label> Dress Type </label> <br />
                <select 
                    style = {{width: '700px', height: '45px', backgroundColor: '#f4f4f4', borderBottomColor: '#f4f4f4', borderRightColor: '#f4f4f4', borderRadius: '.5rem'}}
                    onChange={onContentSelectChange} >
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value} 
                        </option>
                    ))}
                </select>
                <br /> <br />

                <label> Price (LKR) </label> <br />
                <input onChange = {onPriceChange} type = {Number} values = {DressPrice} style = {{width: '700px', height: '45px', backgroundColor: '#f4f4f4', borderRadius: '.5rem'}}/> 
                <br/> <br/>

                <label> Discouont </label> <br />
                <input onChange = {onDiscChange} type = {Number} values = {DressDiscount} style = {{width: '700px', height: '45px', backgroundColor: '#f4f4f4', borderRadius: '.5rem'}}/> 
                <br/> <br/>

                <label> Sizes </label> <br />
                <Checkbox
                    id = "extrasmall"
                    isChecked = {isExtraSmallChecked}
                    name = "example-full"
                    labelPadding = "4px 0"
                    onChange = {setExtraSmallChecked}
                    style = {{marginRight: '5em'}}
                    >
                Extra Small
                </Checkbox>
                
                <Checkbox
                    id = "small"
                    isChecked = {isSmallChecked}
                    name = "example-full"
                    labelPadding = "4px 0"
                    onChange = {setSmallChecked}
                    style = {{marginRight: '5em'}}
                >
                Small
                </Checkbox>
                <Checkbox
                    id = "Medium"
                    isChecked = {isMediumChecked}
                    name = "example-full"
                    labelPadding = "4px 0"
                    onChange = {setMediumChecked}
                    style = {{marginRight: '5em'}}
                >
                Medium
                </Checkbox>
                <Checkbox
                    id = "large"
                    isChecked = {isLargeChecked}
                    name = "example-full"
                    labelPadding = "4px 0"
                    onChange = {setLargeChecked}
                    style = {{marginRight: '5em'}}
                >
                Large
                </Checkbox>
                <Checkbox
                    id = "extralarge"
                    isChecked = {isExtraLargeChecked}
                    name = "example-full"
                    labelPadding = "4px 0"
                    onChange = {setExtraLargeChecked}
                >
                Extra Large
                </Checkbox>
                 <br /> <br />

                 <Button style = {{marginLeft: '13em'}}> SUBMIT</Button>
                 <Button style = {{marginLeft: '5em'}}> CLEAR</Button>

            </Form>
            
        </div>
    )
}

export default AddDressForm
