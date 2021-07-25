export default {
	name: 'project',
	title: 'Projects',
	type: 'document',
	fields: [
		{
			name: 'projectName',
			title: 'Project Name',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'projectName',
				maxLength: 96,
			},
		},
		{
			name: 'startDate',
			title: 'Start Date',
			type: 'date',
		},
		{
			name: 'endDate',
			title: 'End Date',
			type: 'date',
		},
		{
			name: 'type',
			title: 'Type',
			type: 'string',
			options: {
				list: [
					{ value: 'personal', title: 'Personal' },
					{ value: 'university', title: 'University' },
					{ value: 'work', title: 'Work' },
				],
			},
		},
		{
			name: 'projectUrl',
			title: 'Project URL',
			type: 'url',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
		},
	],
	preview: {
		select: {
			title: 'projectName',
			associatedWith: 'associatedWith',
		},
	},
};
