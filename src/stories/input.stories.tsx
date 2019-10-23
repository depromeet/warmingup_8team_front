import React, { useState } from 'react';
import { Input } from 'components';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

export default {
	title: 'Input',
	decorators: [withKnobs],
}

export const DefaultInput = () => {
	const [value, setValue] = useState<string | number>('');

	const onChange = (value: (string | number)) => setValue(value);

	return (
		<div>
			<Input
				placeholder={text('Text', '텍스트를 입력해주세요.')}
				value={value}
				onChange={onChange}
				type={
					select(
						'Input Type',
						{
							Text: 'text',
							Number: 'number',
							Email: 'email',
							Telecom: 'tel',
						},
						'text',
					)
				}
				disabled={boolean('Disable', false)}
			/>

			<p>
				변환된 값 : {value}
			</p>
		</div>
	);
};
