FROM ubuntu

ADD apt-sources.list /etc/apt/sources.list

RUN apt-get update && \
    apt-get install iozone3 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
