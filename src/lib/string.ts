export class StringGenerate {
    generate() {
        return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).substr(1, 6).toUpperCase()
    }
}