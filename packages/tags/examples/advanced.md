The following example shows how a `Tag` can be used together with a child
`span` in order to handle truncation. Use the slider below to change the
width of the text field container. Text within the tags will truncate with an
ellipsis based on the available container width.

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Input, Label, FauxInput, Range } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');
const { Code } = require('@zendeskgarden/react-typography/src');

initialState = {
  size: 'medium',
  width: 100,
  pill: false,
  avatar: false,
  close: false
};

const tags = [
  'veggies es bonus',
  'beet greens corn soko endive',
  'shallot courgette tatsoi pea sprouts',
  'cauliflower',
  'turnip yarrow ricebean rutabaga',
  'celery quandong swiss chard chicory earthnut pea potato',
  'grape wattle seed'
];

<Grid>
  <Row>
    <Col>
      <Well isRecessed style={{ width: 300 }}>
        <Dropdown selectedItem={state.size} onSelect={size => setState({ size })}>
          <SelectField>
            <SelectLabel>Size</SelectLabel>
            <Select isCompact>{state.size}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value="small">small</Item>
            <Item value="medium">medium</Item>
            <Item value="large">large</Item>
          </Menu>
        </Dropdown>
        <Field>
          <Toggle checked={state.pill} onChange={event => setState({ pill: event.target.checked })}>
            <Label style={{ marginTop: 8 }}>Pill</Label>
          </Toggle>
        </Field>
        <Field>
          <Toggle
            checked={state.avatar}
            onChange={event => setState({ avatar: event.target.checked })}
          >
            <Label style={{ marginTop: 8 }}>
              Include <Code>Tag.Avatar</Code>
            </Label>
          </Toggle>
        </Field>
        <Field>
          <Toggle
            checked={state.close}
            onChange={event => setState({ close: event.target.checked })}
          >
            <Label style={{ marginTop: 8 }}>
              Include <Code>Tag.Close</Code>
            </Label>
          </Toggle>
        </Field>
      </Well>
    </Col>
    <Col>
      <FauxInput
        small
        tagLayout
        style={{
          overflow: 'hidden',
          width: `${state.width}%`,
          minWidth: (state.size === 'small' ? 34 : state.size === 'medium' ? 54 : 88) + 36
        }}
      >
        {tags.map((tag, index) => (
          <Tag key={index} isPill={state.pill} size={state.size} style={{ margin: 2 }} tabIndex={0}>
            {state.avatar && (
              <Tag.Avatar>
                <img alt="" src={`images/avatar-${(index % 7) + 1}.png`} />
              </Tag.Avatar>
            )}
            <span>{tag}</span>
            {state.close && <Tag.Close onClick={() => alert(`Delete "${state.text}" tag`)} />}
          </Tag>
        ))}
      </FauxInput>
      <Field>
        <Range
          onChange={event => setState({ width: event.target.value })}
          style={{ marginTop: 8 }}
          value={state.width}
        />
      </Field>
    </Col>
  </Row>
</Grid>;
```
