export default {
	name: 'experience',
	title: 'Work Experience',
	type: 'document',
	fields: [
		{
			name: 'jobTitle',
			title: 'Job Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'jobTitle',
				maxLength: 96,
			},
		},
		{
			name: 'company',
			title: 'Company',
			type: 'string',
		},
		{
			name: 'location',
			title: 'Location',
			type: 'string',
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
			name: 'employmentType',
			title: 'Employment Type',
			type: 'string',
			options: {
				list: [
					{ value: 'Full-Time', title: 'Full-Time' },
					{ value: 'Part-Time', title: 'Part-Time' },
					{ value: 'Self-Employed', title: 'Self-Employed' },
					{ value: 'Freelance', title: 'Freelance' },
					{ value: 'Internship', title: 'Internship' },
					{ value: 'Contract', title: 'Contract' },
					{ value: 'Apprenticeship', title: 'Apprenticeship' },
					{ value: 'Temporary', title: 'Temporary' },
				],
			},
		},
		{
			name: 'description',
			title: 'Description',
			type: 'blockContent',
		},
		{
			name: 'mainImage',
			title: 'Header image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],

	preview: {
		select: {
			title: 'jobTitle',
			company: 'company',
			media: 'mainImage',
		},
	},
};
