# file-sharing-benchmarks

Scripts and tools used to execute some benchmarks for different approaches of file sharing between Mac OS X and Azk containers.

These benchmarks use the [Izone Benchmark Tool](http://iozone.org/).

## Usage

Build docker image:
```shell
$ adocker build -t iozone .
```

Run benchmark:
```
$ azk shell
# iozone -Racb results/<report_file>.xls -f <file_name_to_test>
```
