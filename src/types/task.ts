export default interface Task {
    id: number,
    author: string;
    title: string;
    createAt: Date;
    finished: boolean;
}
