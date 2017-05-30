interface RecordAttributes {
	id?: string,
	title?: string,
	description?: string,
	content?: string,
	date?: Date
}

export class Record {
	public id: string;
	public title: string;
	public description: string;
	public content: string;
	public date: Date;

	constructor(attributes?: RecordAttributes) {
		this.id = attributes && attributes.id;
		this.title = attributes && attributes.title;
		this.description = attributes && attributes.description;
		this.content = attributes && attributes.content;
		this.date = attributes && attributes.date;
	}
}