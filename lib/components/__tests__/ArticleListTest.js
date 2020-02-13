import React from "react";
import ArticleList from "../ArticleList";
import renderer from 'react-test-renderer';

describe('ArticleList',()=>{
    const testProps = {
        articles : {
            a:{id: 'a'},
            b:{id: 'b'},
        },
        store :{
            lookUpAuthor: jest.fn(() => ({})),
        }
        
    }
    it('renders correctly',()=>{
        const element = renderer.create(
            <ArticleList {...testProps} />
        ).toJSON();
        console.log(element);
        expect(element).toMatchSnapshot();
        expect(element.children.length).toBe(2)
    })
})