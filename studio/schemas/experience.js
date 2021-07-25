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
					{ value: 'fulltime', title: 'Full-Time' },
					{ value: 'parttime', title: 'Part-Time' },
					{ value: 'selfEmployed', title: 'Self-Employed' },
					{ value: 'freelance', title: 'Freelance' },
					{ value: 'internship', title: 'Internship' },
					{ value: 'contract', title: 'Contract' },
					{ value: 'apprenticeship', title: 'Apprenticeship' },
					{ value: 'temporary', title: 'Temporary' },
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
			title: 'Supporting Documents',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],

	preview: {
		select: {
			title: 'jobTitle',
			employmentType: 'employmentType',
			company: 'company',
		},
	},
};
