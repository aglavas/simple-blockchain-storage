// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  string public dataStorage = 'initialData';

  function set(string memory data) public {
    dataStorage = data;
  }

  function get() view public returns (string memory) {
    return dataStorage;
  }
}
