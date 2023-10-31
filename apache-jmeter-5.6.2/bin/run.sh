rm -rf ../../results/*
rm -rf ../../resultFramework
./jmeter.sh -n -t ../../http_test.jmx -l ../../resultFramework -e -o ../../results
