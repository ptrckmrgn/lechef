import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../index.css';

import Button from '../components/Button';
import HeaderMobile from '../components/HeaderMobile';
import InputStepper from '../components/InputStepper';
import InputText from '../components/InputText';
import Item from '../components/Item';
import ItemAdd from '../components/ItemAdd';
import ItemEdit from '../components/ItemEdit';
import List from '../containers/List'
import Menu from '../components/Menu';
import Navigation from '../components/Navigation';

storiesOf('Elements', module)
    .add('Button', () => (
        <Button onClick={action('clicked')}>
            Button Text
        </Button>
    ))
    .add('Button Primary', () => (
        <Button primary onClick={action('clicked')}>
            Button Text
        </Button>
    ))
    .add('Button Wide', () => (
        <Button primary wide onClick={action('clicked')}>
            Button Text
        </Button>
    ))
    .add('Button Large', () => (
        <Button primary wide large onClick={action('clicked')}>
            Button Text
        </Button>
    ))
    .add('Input Text', () => (
        <InputText value="text value" onChange={action('text changed')}/>
    ))
    ;

storiesOf('Components', module)
    .add('Header Mobile', () => (
        <HeaderMobile
            title="Shopping List"
            onClickHamburger={action('hamburger clicked')}
            onClickEllipsis={action('ellipsis clicked')}
        />
    ))
    .add('Navigation', () => (
        <Navigation />
    ))
    .add('Menu', () => (
        <Menu onClickClearChecked={action('clear checked')} onClickClearAll={action('clear all')} />
    ))
    .add('Input Stepper', () => (
        <InputStepper value={3} onClickMinus={action('step down')} onClickPlus={action('step up')} />
    ))
    .add('Items', () => (
        <div>
            <Item
                id="123"
                quantity={2}
                value="apples"
                checked={false}
                onChangeCheckbox={action('apples checkbox clicked')}
            />
            <Item
                id="456"
                quantity={4}
                value="bananas"
                checked={true}
                onChangeCheckbox={action('bananas checkbox clicked')}
            />
            <Item
                id="789"
                quantity={8}
                value="carrots"
                checked={false}
                onChangeCheckbox={action('carrots checkbox clicked')}
            />
        </div>
    ))
    .add('Item Add', () => (
        <ItemAdd
            quantity={3}
            onClickMinus={action('step down')}
            onClickPlus={action('step up')}

            name="apples"
            onChangeText={action('text changed')}

            onClickCancel={action('clicked cancel')}
            onClickAdd={action('clicked add')}
            onClickAddAnother={action('clicked add another')}
        />
    ))
    .add('Item Edit', () => (
        <ItemEdit
            quantity={3}
            onClickMinus={action('step down')}
            onClickPlus={action('step up')}

            name="apples"
            onChangeText={action('text changed')}

            onClickCancel={action('clicked cancel')}
            onClickUpdate={action('clicked update')}
        />
    ))
    ;

const SectionTitle = styled.div`
    color: #666;
    text-transform: uppercase;
    font-size: 0.8em;
    padding: 24px;
    padding-bottom: 16px;
`;

storiesOf('Layouts', module)
    .add('List', () => (
        <List
            items={{
                '1': {quantity: 3, value: 'apples', checked: false, onChangeCheckbox: action('apples')},
                '2': {quantity: 2, value: 'bananas', checked: true, onChangeCheckbox: action('bananas')},
                '3': {quantity: 1, value: 'carrots', checked: false, onChangeCheckbox: action('carrots')},
                '4': {quantity: 3, value: 'donuts', checked: false, onChangeCheckbox: action('donuts')},
                '5': {quantity: 5, value: 'eggplant', checked: true, onChangeCheckbox: action('eggplant')},
                '6': {quantity: 1, value: 'fudge', checked: false, onChangeCheckbox: action('fudge')}
            }}
        />
    ))
    .add('Mobile', () => (
        <div style={{position: "relative", height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <div>
                <div style={{position: "fixed", top: "0", width: "100%"}}>
                    <HeaderMobile
                        title="Shopping List"
                        onClickHamburger={action('hamburger clicked')}
                        onClickEllipsis={action('ellipsis clicked')}
                    />
                </div>
                <div style={{padding: "60px 0 120px 0"}}>
                    <List
                        items={{
                            '1': {quantity: 3, value: 'apples', checked: false, onChangeCheckbox: action('apples')},
                            '2': {quantity: 2, value: 'bananas', checked: true, onChangeCheckbox: action('bananas')},
                            '3': {quantity: 1, value: 'carrots', checked: false, onChangeCheckbox: action('carrots')},
                            '4': {quantity: 3, value: 'daikon', checked: false, onChangeCheckbox: action('donuts')},
                            '5': {quantity: 5, value: 'eggplant', checked: true, onChangeCheckbox: action('eggplant')},
                            '6': {quantity: 1, value: 'fudge', checked: false, onChangeCheckbox: action('fudge')},
                            '7': {quantity: 1, value: 'garlic', checked: false, onChangeCheckbox: action('fudge')},
                            '8': {quantity: 1, value: 'honey', checked: false, onChangeCheckbox: action('fudge')},
                            '9': {quantity: 1, value: 'kale', checked: false, onChangeCheckbox: action('fudge')},
                            '10': {quantity: 1, value: 'leek', checked: false, onChangeCheckbox: action('fudge')},
                            '11': {quantity: 12, value: 'mushroom', checked: false, onChangeCheckbox: action('fudge')},
                            '12': {quantity: 2, value: 'onion', checked: false, onChangeCheckbox: action('fudge')}
                        }}
                    />
                </div>
            </div>
            <div style={{position: "fixed", bottom: "0", width: "100%"}}>
                <Button primary wide large onClick={action('clicked')}>
                    Add item
                </Button>
            </div>
        </div>
    ))