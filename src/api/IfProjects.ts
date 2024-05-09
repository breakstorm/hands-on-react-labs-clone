export class Project {
    id: number | string | undefined;
    name: string = "";
    description: string = "";
    contractTypeId: number | undefined;
    contractSignedOn: Date | string;
    budget: number = 0;
    isActive: boolean = false;
    imageUrl: string;


    constructor(initializer?: any) {
        if (!initializer) { return ;}

        if (initializer.id) this.id = initializer.id;
        if (initializer.name) this.name = initializer.name;
        if (initializer.description) this.description = initializer.description;
        if (initializer.contractTypeId)
            this.contractTypeId = initializer.contractTypeId;
        if (initializer.contractSignedOn)
            this.contractSignedOn = new Date(initializer.contractSignedOn);
        if (initializer.budget) this.budget = initializer.budget;
        if (initializer.isActive) this.isActive = initializer.isActive;
        if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
    }
}