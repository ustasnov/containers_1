export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else {
      throw new Error(`Уже есть ${character.name} в команде!`);
    }
  }

  addAll(...characters) {
    characters.forEach((elem) => {
      this.members.add(elem);
    });
  }

  toArray() {
    const result = [];
    for (const member of this.members) {
      result.push(member);
    }
    return result;
  }
}
