**Task Manager CLI**
=====================

A simple command-line interface (CLI) for managing tasks.

**Table of Contents**
-----------------

* [Installation](#installation)
* [Usage](#usage)
* [Commands](#commands)
* [Features](#features)
* [Contributing](#contributing)
* [License](#license)

**Installation**
---------------

To install the Task Manager CLI, simply clone this repository and navigate to the project directory:
```bash
git clone https://github.com/your-username/task-manager-cli.git
cd task-manager-cli
run npm install
```
**Usage**
-----

To use the Task Manager CLI, simply run the following command:
```bash
node task-cli.js <command> [arguments]
```
Replace `<command>` with one of the available commands (see below).

**Commands**
------------

* `add`: Add a new task
* `update`: Update an existing task
* `delete`: Delete a task
* `mark-in-progress`: Mark a task as in progress
* `mark-done`: Mark a task as done
* `list`: List all tasks

**Arguments**

* `add`: `<description>` (required)
* `update`: `<id>` (required), `<description>` (required)
* `delete`: `<id>` (required)
* `mark-in-progress`: `<id>` (required)
* `mark-done`: `<id>` (required)
* `list`: `[status]` (optional)

**Features**
------------

* Add, update, delete, and mark tasks as in progress or done
* List all tasks, or filter by status (todo, in progress, done)
* Stores tasks in a JSON file for persistence

**Contributing**
------------

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

**License**
-------

This project is licensed under the MIT License.

**Example Usage**
---------------

* `node task-cli.js add "Buy groceries"`: Add a new task
* `node task-cli.js update 123 "Buy groceries and cook dinner"`: Update an existing task
* `node task-cli.js delete 123`: Delete a task
* `node task-cli.js mark-in-progress 123`: Mark a task as in progress
* `node task-cli.js mark-done 123`: Mark a task as done
* `node task-cli.js list`: List all tasks
* `node task-cli.js list done`: List all done tasks

Note: This is a basic implementation, and you may want to add additional features or error handling to make the app more robust.