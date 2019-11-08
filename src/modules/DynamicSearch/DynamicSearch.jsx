import React from 'react';
import Input from 'components/Input'
import Button from 'components/Button'
import Block from 'components/Block'

class DynamicSearch extends React.Component {

    state = {
        data: [
            'Mariupol',
            'Kyiv',
            'Los-Angeles',
            'Moscow',
            'Berdyansk',
            'Odessa'
        ],
        findedIndexes: [],
    };

render = () => {
    const {data = [], findedIndexes = []} = this.state;
    return <>
    <Input onChange={(e) => {
        this.setState({
            findedIndexes: data.filter((item)=> {
                item = item.toLowerCase();
                if(item.indexOf(e.target.value.toLowerCase()) === 0){
                    return true;
                }
                return false;
            })
        })
        const finded = data.filter((item) => {
            item = item.toLowerCase();
            if(data.indexOf(e.target.value.toLowerCase()) === 0){
                return true
            } return false
        }); }} />
    <Button onClick={(e)=>{
        this.setState({
            findedIndexes: []
        });
        document.querySelector('Input').value = "";
    }
    }>
        X
    </Button>
    <Button>
        Find
    </Button>
        <Block>
            { (findedIndexes.length > 0 ?
            findedIndexes :
                data).map((item, i) => {
                return <Block key={i}>{item}</Block>
            })}
        </Block>
        </>
}

}

export default DynamicSearch;