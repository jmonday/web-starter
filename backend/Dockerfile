FROM alpine:3.12

WORKDIR /backend

RUN apk add --update --no-cache \
    busybox-initscripts \
    composer \
    coreutils \
    curl \
    make \
    openrc \
    php7-apcu \
    php7-ctype \
    php7-curl \
    php7-dom \
    php7-fileinfo\
    php7-fpm \
    php7-gd \
    php7-iconv \
    php7-imagick \
    php7-intl \
    php7-json \
    php7-mbstring \
    php7-mcrypt \
    php7-opcache \
    php7-openssl \
    php7-pcntl \
    php7-pdo \
    php7-pdo_pgsql \
    php7-pecl-redis \
    php7-pgsql \
    php7-phar \
    php7-posix \
    php7-session \
    php7-simplexml \
    php7-tokenizer \
    php7-xdebug \
    php7-xml \
    php7-xmlwriter \
    php7-zip \
    php7-zlib \
    supervisor && \
    rm  -rf /tmp/* /var/cache/apk/*

COPY ./php.ini /etc/php7/conf.d/
COPY ./xdebug.ini /etc/php7/conf.d/
COPY ./app.pool.conf /etc/php7/php-fpm.d/
COPY ./supervisord.conf /etc/supervisord.conf
COPY ./horizon.conf /etc/supervisor/conf.d/
COPY . .

EXPOSE 8001

CMD ./start.sh
