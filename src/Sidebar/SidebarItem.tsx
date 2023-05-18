export class SidebarItem{

    constructor(id: number, text: string, icon: string) {
        this.id = id ?? 0;
        this.text = text;
        this.icon = icon;
    }

    public id: number = 0;
    public text: string;
    public icon: string;

    // The Idea behind this is, that the SidebarItem can execute an action, when clicked.
    // public action: () => void = () => {};
    public children: SidebarItem[] = [];

}
