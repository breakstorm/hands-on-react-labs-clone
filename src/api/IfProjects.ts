export class Project {
    id: number | undefined;
    name: string = "";
    description: string = "";
    contractTypeId: number | undefined;
    contractSignedOn: Date = new Date();
    budget: number = 0;
    isActive: boolean = false;


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
    }
}