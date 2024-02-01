class BlockService {
  constructor() {
    this.blocks = this.getBlocksFromLocalStorage();
  }

  getBlocksFromLocalStorage() {
    const blocks = window.localStorage.getItem("blocks");
    return blocks ? JSON.parse(blocks) : [];
  }

  updateBlocksInLocalStorage(blocks) {
    window.localStorage.setItem("blocks", JSON.stringify(blocks));
  }

  getBlocks() {
    return this.blocks;
  }

  addBlock(block) {
    this.blocks.push(block);
    this.updateBlocksInLocalStorage(this.blocks);
  }

  removeBlock(block) {
    this.blocks = this.blocks.filter((b) => b !== block);
    this.updateBlocksInLocalStorage(this.blocks);
  }

  updateBlock(block) {
    this.blocks = this.blocks.map((b) => (b === block ? block : b));
    this.updateBlocksInLocalStorage(this.blocks);
  }

  moveBlock(source, destination) {
    const temp = this.blocks[source];
    this.blocks[source] = this.blocks[destination];
    this.blocks[destination] = temp;
    this.updateBlocksInLocalStorage(this.blocks);
  }
}

const blockService = new BlockService();

export default blockService;
