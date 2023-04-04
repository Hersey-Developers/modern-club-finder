class Clubs {
    constructor([id, clubName, categories, description, date, time, room, sponsor, email]) {
        this.id = id;
        this.clubName = clubName;
        this.categories = categories;
        this.description = description;
        this.date = date;
        this.time = time;
        this.room = room;
        this.sponsor = sponsor;
        this.email = email;
    }

    getClubName() {
        return this.clubName;
    }

    getCategories() {
        return this.categories;
    }

    getDescription() {
        return this.description;
    }

    getDate() {
        return this.date;
    }
    
    getTime() {
        return this.time;
    }

    getRoom() {
        return `Room ${this.room}`;
    }

    getSponsor() {
        return `Sponsored by ${this.sponsor}`;
    }

    getEmail() {
        return this.email;
    }
}

export default Clubs;