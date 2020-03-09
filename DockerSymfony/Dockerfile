FROM php:7.3-apache
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
RUN apt-get update \
    && apt-get install -y --no-install-recommends locales apt-utils git;
RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && \
    echo "fr_FR.UTF-8 UTF-8" >> /etc/locale.gen && \
    locale-gen
COPY php.ini /usr/local/etc/php/php.ini
RUN curl -sSk https://getcomposer.org/installer | php -- --disable-tls && \
   mv composer.phar /usr/local/bin/composer
RUN addgroup --system gponty --gid 1000 && adduser --system gponty --uid 1000 --ingroup gponty
RUN git init 
RUN git clone https://github.com/muhammedInan/plateform.git
WORKDIR /var/www/
CMD ["symfony", "--smallfiles"]
