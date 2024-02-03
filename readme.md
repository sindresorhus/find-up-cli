# find-up-cli

> Find a file by walking up parent directories

## Install

```sh
npm install --global find-up-cli
```

## Usage

```
$ find-up --help

  Usage
    $ find-up <filename>

  Options
    --cwd=<directory>  Working directory
    --all              Output all matching files, not just the first

  Example
    $ echo $PWD
    /Users/sindresorhus/foo/bar
    $ find-up unicorn.png
    /Users/sindresorhus/unicorn.png
    $ find-up unicorn.png --all
    /Users/sindresorhus/foo/unicorn.png
    /Users/sindresorhus/unicorn.png
```

## Example

```
/
└── Users
    └── sindresorhus
        ├── unicorn.png
        └── foo
            └── bar
                ├── baz
                └── faz
```

```
$ echo $PWD
/Users/sindresorhus/foo/bar/faz
$ find-up unicorn.png
/Users/sindresorhus/unicorn.png
```

## Related

- [find-up](https://github.com/sindresorhus/find-up) - API for this module
