# Conditional Rendering Components Documentation

Welcome to the documentation for the conditional rendering components provided by the Gorny library. These components make it easier to conditionally display content based on specific conditions. The main component is the `Choose` component, which offers powerful control over rendering different content blocks.

## Table of Contents

- [Choose Component](#choose-component)
  - [Import](#choose-import)
  - [Props](#choose-props)
  - [Usage](#choose-usage)
    - [Example with Multiple Conditions](#example-with-multiple-conditions)
    - [Example with Single Condition](#example-with-single-condition)
- [Choose.When Component](#choosewhen-component)
  - [Import](#choosewhen-import)
  - [Props](#choosewhen-props)
  - [Usage](#choosewhen-usage)
- [Choose.Otherwise Component](#chooseotherwise-component)
  - [Import](#chooseotherwise-import)
  - [Props](#chooseotherwise-props)
  - [Usage](#chooseotherwise-usage)

---

## Choose Component

The `Choose` component enables you to conditionally render different content blocks based on specific conditions. It is especially useful when you need to display content based on multiple possible conditions.

### Choose Import

```jsx
import { Choose } from 'gorny';
```

### Choose Props

- `children` (Required): A React node or an array of React nodes representing the content blocks to choose from.
- `multiple` (Optional): Set to `true` to allow rendering of multiple content blocks. Default value is `false`.

### Choose Usage

#### Example with Multiple Conditions

```jsx
<Choose multiple>
	<Choose.When condition={condition1}>
		{/* Content for condition 1 */}
	</Choose.When>
	<Choose.When condition={condition2}>
		{/* Content for condition 2 */}
	</Choose.When>
	<Choose.Otherwise>{/* Content if no conditions are met */}</Choose.Otherwise>
</Choose>
```

#### Example with Single Condition

```jsx
<Choose>
	<Choose.When condition={condition1}>
		{/* Content for condition 1 */}
	</Choose.When>
	<Choose.When condition={condition2}>
		{/* Content for condition 2 */}
	</Choose.When>
	<Choose.Otherwise>{/* Content if no conditions are met */}</Choose.Otherwise>
</Choose>
```

---

## Choose.When Component

The `Choose.When` component is used within the `Choose` component to define a specific condition and the corresponding content to render if the condition is met.

### Choose.When Import

```jsx
import { Choose } from 'gorny';
```

### Choose.When Props

- `condition` (Required): The condition that determines whether to render the associated content.
- `children` (Required): A React node or an array of React nodes representing the content to be rendered when the condition is met.

### Choose.When Usage

```jsx
<Choose>
	<Choose.When condition={someCondition}>
		{/* Content to render if the condition is met */}
	</Choose.When>
</Choose>
```

---

## Choose.Otherwise Component

The `Choose.Otherwise` component is used within the `Choose` component to define content that should be rendered when no other conditions are met.

### Choose.Otherwise Import

```jsx
import { Choose } from 'gorny';
```

### Choose.Otherwise Props

- `children` (Required): A React node or an array of React nodes representing the content to be rendered when no conditions are met.

### Choose.Otherwise Usage

```jsx
<Choose>
	{/* ...  */}
	<Choose.Otherwise>
		{/* Content to render if no conditions are met*/}
	</Choose.Otherwise>
</Choose>
```
